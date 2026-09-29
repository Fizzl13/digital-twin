const $ = (id) => document.getElementById(id);

function newId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
let conversationId = newId();
let suggestions = [];

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
  const thinking = bubble("twin thinking", t("thinking"));
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question, conversationId }),
    });
    const data = await res.json().catch(() => ({ error: t("unexpected") }));
    thinking.remove();
    if (!res.ok) return bubble("twin error", data.error || t("failed"));
    const sources = data.sources.map((s) => t(`s_${s}`)).join(", ");
    const meta = data.in_profile ? `${t("confidence")}: ${t(data.confidence)}${sources ? ` · ${t("from")}: ${sources}` : ""}` : t("notInProfile");
    bubble("twin", data.answer, meta);
  } catch {
    thinking.remove();
    bubble("twin error", t("offline"));
  } finally {
    $("go").disabled = false;
    $("question").focus();
  }
}

function renderSuggestions() {
  $("suggestions").replaceChildren(...suggestions.map((s) => {
    const b = Object.assign(document.createElement("button"), { type: "button", textContent: s[lang] });
    b.addEventListener("click", () => ask(s[lang]));
    return b;
  }));
}

$("form").addEventListener("submit", (e) => { e.preventDefault(); ask($("question").value); });

$("clear").addEventListener("click", () => {
  fetch(`/api/chat?conversationId=${encodeURIComponent(conversationId)}`, { method: "DELETE" }).catch(() => {});
  conversationId = newId();
  $("log").querySelectorAll(".msg").forEach((m) => m.remove());
  $("empty").hidden = false;
});

document.addEventListener("langchange", renderSuggestions);
applyLang();

(async () => {
  suggestions = (await (await fetch("/api/config")).json()).suggestions;
  renderSuggestions();
})();
