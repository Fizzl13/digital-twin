# Digital Twin

Ask Frits, or rather his twin. Visitors ask about his experience, skills and AI projects in English or Dutch. The twin answers **only from a profile Frits wrote himself**: his public CV plus how he works, his view on AI, the role he is looking for, his hobbies and that he has two children. It says which parts it used, and says so when the profile doesn't cover a question.

Live: see [projects.fizzl.eu](https://projects.fizzl.eu/). Built by Frits ([fizzl.eu](https://fizzl.eu/)) with Claude.

## How it works

- **The knowledge** is [`src/profile.js`](src/profile.js): the facts from [cv.fizzl.eu](https://cv.fizzl.eu/) plus what Frits chose to share, split into sections. Nothing else private (age, the children's names or ages) and nothing internal about employers. A test fails if his birth date or the children's ages ever end up in it.
- **The answer** comes from Claude with structured output: `answer`, `language`, `confidence`, the `sources` (profile sections) it used, and `in_profile`.
- **Guard rails:** the system prompt is fixed on the server. The visitor's question is wrapped as data, and private topics (age, income, the children's names or ages…) are off limits. The browser can't send its own prompt, so the key can't be used as an open Claude proxy.
- **Memory:** the last 3 turns per conversation, kept on the server and forgotten after 30 minutes, so follow-ups like "and before that?" work.
- **Voice:** a microphone button turns a spoken question into text (in the page language), and answers to spoken questions are read aloud; "Read answers aloud" does that for every answer. Both use the browser's own speech features (`public/voice.js`), so the server doesn't change. Where a browser has no speech recognition (Firefox), the microphone button simply doesn't show.
- **Limits:** 20 questions per visitor per hour and 500 per day. The question is capped at 500 characters.

## API

`POST /api/chat` with `{ "question": "…", "conversationId": "<uuid>" }` returns `{ answer, language, confidence, sources, in_profile, model }`.

`DELETE /api/chat?conversationId=<uuid>` forgets a conversation.

The chat widget on fizzl.eu uses the same API; CORS allows the fizzl.eu sites only.

## Run it

```bash
npm install
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env   # never commit this
npm run dev                                  # http://localhost:3000
npm test                                     # no API key needed
```

Deploy on Render with the included `render.yaml` (Blueprint); set `ANTHROPIC_API_KEY` in Render only.
