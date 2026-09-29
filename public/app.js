const $ = (id) => document.getElementById(id);
const SOURCE_LABELS = {
  profile: "Profile", fizzl: "FIZZL", mediahuis: "Mediahuis", consulting: "Consulting", tkmaxx: "TK Maxx",
  skills: "Skills", languages: "Languages", education: "Education", projects: "Projects", approach: "Approach", contact: "Contact",
};

function newId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
let conversationId = newId();

function bubble(role, text, meta) {
  $("empty").hidden = true;
  const row = document.createElement("div");
  row.className = `msg ${role}`;
  row.append(Object.assign(document.createElement("p"), { textContent: text }));
  if (meta) row.append(Object.assign(document.createElement("small"), { textContent: meta }));
  $("log").append(row);
  $("log").scrollTop = $("log").scrollHeight;
  return row;
}

async function ask(question) {
  question = question.trim();
  if (!question) return;
  bubble("you", question);
  $("question").value = "";
  $("go").disabled = true;
  const thinking = bubble("twin thinking", "Thinking…");
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question, conversationId }),
    });
    const data = await res.json().catch(() => ({ error: "Unexpected answer from the server." }));
    thinking.remove();
    if (!res.ok) return bubble("twin error", data.error || "Something went wrong.");
    const sources = data.sources.map((s) => SOURCE_LABELS[s] ?? s).join(", ");
    const meta = data.in_profile ? `Confidence: ${data.confidence}${sources ? ` · From: ${sources}` : ""}` : "Not on the CV";
    bubble("twin", data.answer, meta);
  } catch {
    thinking.remove();
    bubble("twin error", "Could not reach the twin. Check your connection.");
  } finally {
    $("go").disabled = false;
    $("question").focus();
  }
}

$("form").addEventListener("submit", (e) => { e.preventDefault(); ask($("question").value); });

$("clear").addEventListener("click", () => {
  fetch(`/api/chat?conversationId=${encodeURIComponent(conversationId)}`, { method: "DELETE" }).catch(() => {});
  conversationId = newId();
  $("log").querySelectorAll(".msg").forEach((m) => m.remove());
  $("empty").hidden = false;
});

(async () => {
  const config = await (await fetch("/api/config")).json();
  const lang = navigator.language?.startsWith("nl") ? "nl" : "en";
  for (const s of config.suggestions) {
    const b = Object.assign(document.createElement("button"), { type: "button", textContent: s[lang] });
    b.addEventListener("click", () => ask(s[lang]));
    $("suggestions").append(b);
  }
})();
