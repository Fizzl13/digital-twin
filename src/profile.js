// Everything the twin knows. Only what is already public on cv.fizzl.eu,
// projects.fizzl.eu and fizzl.eu: no private details, nothing internal about
// employers. The twin may not answer beyond this.

export const PERSON = "Frits";

export const SECTIONS = {
  profile: {
    title: "Profile",
    text: `Frits is a Customer Success specialist with 4+ years of experience in customer retention, account growth and consultative selling, based in the Amsterdam area (Netherlands). Next to that he builds AI tools: four live services that AI agents find and pay for per call. His brand is FIZZL (fizzl.eu).`,
  },
  fizzl: {
    title: "FIZZL, AI builder (2026 to present)",
    text: `Independent. Designed, built and runs four live pay-per-call services for AI agents, built with Claude and Claude Code:
- x402 Doctor: checks paid APIs before an agent pays.
- presign-guard: explains what a wallet signature can move before you sign.
- Ichimoku Signal: crypto trading signals.
- PlainText: wallet approvals explained in plain language.
Agents pay in USDC on Base or Solana via the x402 protocol. Each service has an MCP server and is listed in the Coinbase Bazaar.`,
  },
  mediahuis: {
    title: "Mediahuis, Customer Success & Sales Specialist (2024 to present)",
    text: `Manages a portfolio of 200+ B2C subscription customers. Focus on retention, account expansion, customer communication and cross-functional coordination. Worked on proactive retention interventions, upsell and cross-sell opportunities and escalation handling. Results as stated on his CV: about 20% churn reduction, 15 to 25% account uplift, 30% fewer escalations, response time under 4 hours. Works with Salesforce.`,
  },
  consulting: {
    title: "Commercial consultant, startups & Web3 (2020 to 2023)",
    text: `Independent commercial consultant. Advised 6 early-stage startups on go-to-market strategy, SaaS propositions and founder pitch processes. Developed commercial frameworks for 2 SaaS propositions. One client grew from 0 to 50 paying users within 90 days. Pitch processes he supported raised 350K+ in seed funding together.`,
  },
  tkmaxx: {
    title: "TK Maxx Amsterdam, Sales & Operations (2017 to 2019)",
    text: `Customer advice, product knowledge and supporting improvements to inventory processes. Consistently top-3 in sales in a team of 25; about 15% fewer stock errors.`,
  },
  skills: {
    title: "Skills",
    text: `Sales: consultative selling, upselling and cross-selling, churn reduction, account expansion.
Customer success: relationship management, needs analysis, customer retention.
Data & reporting: data-driven reporting, CRM-based account analysis.
Tools: Salesforce CRM, Microsoft Office 365.
AI & building: building with Claude and Claude Code: APIs in Node.js, MCP servers, x402 payments, tests, deploys and monitoring. Basic Python and HTML/CSS.`,
  },
  languages: {
    title: "Languages",
    text: `Dutch (native), English (C1), German (B2), French (B1).`,
  },
  education: {
    title: "Education",
    text: `Small Business & Retail Management at Inholland Amsterdam. Media & Informatiemanagement at the Hogeschool van Amsterdam.`,
  },
  projects: {
    title: "AI projects",
    text: `- ReplyDesk: turns a customer message into a draft reply that follows the company's policies; a human reviews every draft. Public demo with a fictional company.
- Process Agent: analyses a customer case, checks it against policies and decides which actions may be prepared automatically and which need a human.
- This Digital Twin: answers questions about his CV, only from what is on it.
All built with Claude; code on github.com/Fizzl13.`,
  },
  approach: {
    title: "How he works",
    text: `Customer first: people should feel heard and see their problem actually solved. He likes to use AI where it removes repetitive work, with a human in control of anything that matters: drafts are reviewed, risky actions are approved by a person.`,
  },
  contact: {
    title: "Contact",
    text: `Email Fizzl13@protonmail.com, LinkedIn (linkedin.com/in/fritszwager), or fizzl.eu.`,
  },
};

export const SECTION_IDS = Object.keys(SECTIONS);

export const SUGGESTIONS = [
  { en: "What experience does Frits have with customer retention?", nl: "Welke ervaring heeft Frits met klantbehoud?" },
  { en: "What has he built with AI?", nl: "Wat heeft hij met AI gebouwd?" },
  { en: "What does Frits do at Mediahuis?", nl: "Wat doet Frits bij Mediahuis?" },
  { en: "Which languages does he speak?", nl: "Welke talen spreekt hij?" },
];
