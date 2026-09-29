// NL | EN for the page text. English is the default; a visitor's choice is
// remembered in this browser. All strings here are ours and static, so the
// few with markup can be set as HTML.
const I18N = {
  en: {
    title: "Ask Frits — Digital Twin",
    pill: "ANSWERS ONLY FROM <b>HIS OWN PROFILE</b>",
    h1: "Ask Frits.<br><em>Or rather, his twin.</em>",
    intro: "Ask about his experience, the AI tools he built, how he works, how he thinks about AI or what kind of role he is looking for, in English or Dutch. The twin answers only from a profile Frits wrote himself and says which parts it used. If the profile doesn't cover it, it tells you so.",
    conversation: "01 / CONVERSATION",
    clear: "New conversation",
    empty: "Pick a question below or type your own.",
    questionLabel: "Your question",
    placeholder: "e.g. What has he built with AI?",
    ask: "Ask →",
    fine: 'Demo limit: 20 questions per hour. Answers are AI-generated; for the official facts see <a href="https://cv.fizzl.eu/">cv.fizzl.eu</a>.',
    footer: 'Built by <a href="https://fizzl.eu/">Frits · fizzl.eu</a> with Claude.',
    source: "Source on GitHub ↗",
    readAloud: "Read answers aloud",
    micStart: "Ask by voice",
    micStop: "Stop listening",
    listening: "Listening…",
    micBlocked: "The microphone is blocked. Allow it for this site in your browser settings, or type your question.",
    micError: "I didn't catch that. Try again, or type your question.",
    voiceNote: "Speech is handled by your browser; some browsers send the audio to their own service to turn it into text.",
    thinking: "Thinking…",
    unexpected: "Unexpected answer from the server.",
    failed: "Something went wrong.",
    offline: "Could not reach the twin. Check your connection.",
    confidence: "Confidence",
    from: "From",
    notInProfile: "Not in his profile",
    high: "high", medium: "medium", low: "low",
    s_profile: "Profile", s_fizzl: "FIZZL", s_mediahuis: "Mediahuis", s_consulting: "Consulting", s_tkmaxx: "TK Maxx",
    s_skills: "Skills", s_languages: "Languages", s_education: "Education", s_services: "x402 services", s_projects: "Projects",
    s_work_style: "Work style", s_ai_view: "View on AI", s_career: "Career", s_personal: "Outside work", s_approach: "Approach", s_contact: "Contact",
  },
  nl: {
    title: "Vraag het Frits — Digital Twin",
    pill: "ANTWOORDT ALLEEN VANUIT <b>ZIJN EIGEN PROFIEL</b>",
    h1: "Vraag het Frits.<br><em>Of eigenlijk zijn twin.</em>",
    intro: "Vraag naar zijn ervaring, de AI-tools die hij bouwde, hoe hij werkt, hoe hij naar AI kijkt of wat voor functie hij zoekt, in het Nederlands of Engels. De twin antwoordt alleen vanuit een profiel dat Frits zelf schreef en zegt welke delen hij gebruikte. Staat het er niet in, dan zegt hij dat.",
    conversation: "01 / GESPREK",
    clear: "Nieuw gesprek",
    empty: "Kies hieronder een vraag of typ je eigen vraag.",
    questionLabel: "Je vraag",
    placeholder: "bijv. Wat heeft hij met AI gebouwd?",
    ask: "Vraag →",
    fine: 'Demolimiet: 20 vragen per uur. De antwoorden zijn door AI gemaakt; de officiële feiten staan op <a href="https://cv.fizzl.eu/">cv.fizzl.eu</a>.',
    footer: 'Gebouwd door <a href="https://fizzl.eu/">Frits · fizzl.eu</a> met Claude.',
    source: "Broncode op GitHub ↗",
    readAloud: "Antwoorden voorlezen",
    micStart: "Vraag het met je stem",
    micStop: "Stop met luisteren",
    listening: "Ik luister…",
    micBlocked: "De microfoon is geblokkeerd. Sta hem toe voor deze site in je browserinstellingen, of typ je vraag.",
    micError: "Dat verstond ik niet. Probeer het nog eens, of typ je vraag.",
    voiceNote: "Spraak loopt via je browser; sommige browsers sturen het geluid naar hun eigen dienst om er tekst van te maken.",
    thinking: "Even denken…",
    unexpected: "Onverwacht antwoord van de server.",
    failed: "Er ging iets mis.",
    offline: "De twin is niet bereikbaar. Controleer je verbinding.",
    confidence: "Zekerheid",
    from: "Uit",
    notInProfile: "Staat niet in zijn profiel",
    high: "hoog", medium: "gemiddeld", low: "laag",
    s_profile: "Profiel", s_fizzl: "FIZZL", s_mediahuis: "Mediahuis", s_consulting: "Consultancy", s_tkmaxx: "TK Maxx",
    s_skills: "Vaardigheden", s_languages: "Talen", s_education: "Opleiding", s_services: "x402-services", s_projects: "Projecten",
    s_work_style: "Werkstijl", s_ai_view: "Kijk op AI", s_career: "Carrière", s_personal: "Buiten het werk", s_approach: "Aanpak", s_contact: "Contact",
  },
};

let lang = "en";
try { if (localStorage.getItem("lang") === "nl") lang = "nl"; } catch {}

function t(key) {
  return I18N[lang][key] ?? I18N.en[key] ?? key;
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.dispatchEvent(new Event("langchange"));
}

document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch {}
  applyLang();
}));
