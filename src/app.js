import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PERSON, SUGGESTIONS } from "./profile.js";
import { TwinError, parseChatRequest, isConversationId, MAX_QUESTION_CHARS } from "./twin.js";

const PUBLIC_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");

// The chat widgets on these sites call the API from the browser.
export const DEFAULT_ORIGINS = ["https://fizzl.eu", "https://www.fizzl.eu", "https://ai.fizzl.eu", "https://cv.fizzl.eu", "https://projects.fizzl.eu"];

// Every answer costs an API call, so the public demo is capped per visitor and
// per day. Per instance and in memory: a restart resets it, which is fine here.
export function createLimiter({ perIpPerHour = 20, perDay = 500, now = () => Date.now() } = {}) {
  const hits = new Map();
  let day = { start: now(), count: 0 };
  return function allow(ip) {
    const t = now();
    if (t - day.start >= 86_400_000) day = { start: t, count: 0 };
    if (day.count >= perDay) return { ok: false, reason: "The demo's daily limit is reached. Try again tomorrow." };
    const recent = (hits.get(ip) ?? []).filter((s) => t - s < 3_600_000);
    if (recent.length >= perIpPerHour) return { ok: false, reason: `Demo limit: ${perIpPerHour} questions per hour. Try again later.` };
    recent.push(t);
    hits.set(ip, recent);
    if (hits.size > 10_000) hits.delete(hits.keys().next().value);
    day.count++;
    return { ok: true };
  };
}

export function createApp({ ask, limiter = createLimiter(), origins = DEFAULT_ORIGINS }) {
  const app = express();
  app.set("trust proxy", 1);
  app.disable("x-powered-by");
  app.use((_req, res, next) => {
    res.set({
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; frame-ancestors 'none'",
    });
    next();
  });

  app.use("/api/chat", (req, res, next) => {
    const origin = req.get("origin");
    if (origin && origins.includes(origin)) {
      res.set({
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "600",
        Vary: "Origin",
      });
    }
    if (req.method === "OPTIONS") return res.sendStatus(origin && origins.includes(origin) ? 204 : 403);
    next();
  });

  app.get("/health", (_req, res) => res.json({ ok: true, service: "digital-twin" }));

  app.get("/api/config", (_req, res) => res.json({
    person: PERSON,
    suggestions: SUGGESTIONS,
    limits: { question: MAX_QUESTION_CHARS },
  }));

  app.post("/api/chat", express.json({ limit: "8kb" }), async (req, res) => {
    try {
      const request = parseChatRequest(req.body);
      const allowed = limiter(req.ip);
      if (!allowed.ok) return res.status(429).json({ error: allowed.reason });
      res.set("Cache-Control", "no-store").json(await ask(request));
    } catch (err) {
      if (err instanceof TwinError) return res.status(err.status).json({ error: err.message });
      console.error("[chat]", err);
      res.status(500).json({ error: "Something went wrong. Try again." });
    }
  });

  app.delete("/api/chat", (req, res) => {
    if (isConversationId(req.query.conversationId)) ask.forget?.(req.query.conversationId);
    res.json({ ok: true });
  });

  app.use(express.static(PUBLIC_DIR, { maxAge: "1h" }));
  app.use((_req, res) => res.status(404).json({ error: "Not found" }));
  return app;
}
