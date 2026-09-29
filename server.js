import { createApp } from "./src/app.js";
import { createTwin } from "./src/twin.js";

if (!process.env.ANTHROPIC_API_KEY) console.warn("ANTHROPIC_API_KEY is not set: answers will fail.");

const port = Number(process.env.PORT) || 3000;
createApp({ ask: createTwin() }).listen(port, () => console.log(`Digital Twin on http://localhost:${port}`));
