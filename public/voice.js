// Talk to the twin: the microphone turns speech into a question, and answers
// can be read aloud. Both use the browser's own speech features, so nothing
// changes on the server; the buttons only appear where the browser has them.
(() => {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const synth = window.speechSynthesis;
  const mic = $("mic");
  const speakBtn = $("speak");
  let rec = null;
  let listening = false;
  let spokenQuestion = false;
  let readAloud = false;
  try { readAloud = localStorage.getItem("twin-read-aloud") === "on"; } catch {}

  const bcp47 = (code) => (code === "nl" ? "nl-NL" : "en-US");

  function labels() {
    mic.setAttribute("aria-label", t(listening ? "micStop" : "micStart"));
    mic.title = t(listening ? "micStop" : "micStart");
    speakBtn.setAttribute("aria-pressed", String(readAloud));
  }

  function setListening(on) {
    listening = on;
    mic.setAttribute("aria-pressed", String(on));
    $("question").placeholder = on ? t("listening") : t("placeholder");
    labels();
  }

  // Browsers don't say which voices are male, so pick by the names the common
  // systems use (Apple, Microsoft, Google). If a language has no male voice,
  // the first voice for it gets a lower pitch.
  const MALE = /\b(daniel|alex|aaron|arthur|fred|gordon|oliver|reed|rocko|eddy|evan|nathan|tom|thomas|james|david|mark|guy|george|ryan|william|brian|christopher|eric|roger|andrew|xander|maarten|frank|arnaud|colin|male)\b/i;
  const FEMALE = /female|samantha|karen|moira|tessa|victoria|fiona|susan|zira|hazel|claire|ellen|fenna|colette|flo|shelley|sandy|grandma|kathy|aria|jenny|emma|sonia|libby/i;

  function pickVoice(language) {
    const voices = synth.getVoices().filter((v) => v.lang.replace("_", "-").toLowerCase().startsWith(language));
    const male = voices.find((v) => MALE.test(v.name) && !FEMALE.test(v.name));
    return { voice: male ?? voices.find((v) => !FEMALE.test(v.name)) ?? voices[0], male: Boolean(male) };
  }

  function speak(text, language) {
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = bcp47(language);
    const { voice, male } = pickVoice(language);
    if (voice) u.voice = voice;
    u.pitch = male ? 1 : 0.8;
    u.rate = 1;
    synth.speak(u);
  }

  function listen() {
    synth?.cancel();
    rec = new Recognition();
    rec.lang = bcp47(lang);
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    let heard = "";
    rec.onresult = (e) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) heard += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      $("question").value = `${heard}${interim}`.trim();
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") bubble("twin error", t("micBlocked"));
      else if (e.error !== "aborted") bubble("twin error", t("micError"));
      heard = "";
    };
    rec.onend = () => {
      setListening(false);
      const question = heard.trim();
      if (question) {
        spokenQuestion = true;
        ask(question);
      }
    };
    rec.start();
    setListening(true);
  }

  if (Recognition) {
    mic.hidden = false;
    $("voiceNote").hidden = false;
    mic.addEventListener("click", () => (listening ? rec.stop() : listen()));
  }

  if (synth) {
    synth.getVoices();
    speakBtn.hidden = false;
    speakBtn.addEventListener("click", () => {
      readAloud = !readAloud;
      if (!readAloud) synth.cancel();
      try { localStorage.setItem("twin-read-aloud", readAloud ? "on" : "off"); } catch {}
      labels();
    });
    // A spoken question gets a spoken answer; with "read aloud" on, every answer does.
    document.addEventListener("twin-answer", (e) => {
      if (readAloud || spokenQuestion) speak(e.detail.answer, e.detail.language);
      spokenQuestion = false;
    });
    $("clear").addEventListener("click", () => synth.cancel());
  }

  document.addEventListener("langchange", labels);
  labels();
})();
