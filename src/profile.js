// Everything the twin knows: the public CV (cv.fizzl.eu) plus what Frits chose
// to share about how he works, his view on AI, the role he is looking for and
// his hobbies. No private details (age, family), nothing internal about
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
  services: {
    title: "The four x402 services in more detail",
    text: `- x402 Doctor checks a paid API before an AI agent pays for it: does it answer, are its payment terms valid, what does it cost, on which network. It can also run a deeper check that makes a real small test payment.
- presign-guard looks at a transaction or signature before a wallet signs it and explains what it could move or approve, flagging risks such as tokens whose transfers can be frozen or funds locked in a launch escrow.
- Ichimoku Signal gives crypto trading signals based on the Ichimoku cloud method; the signals are tracked in a public paper track record (no real money is traded).
- PlainText explains wallet approvals and smart-contract permissions in plain language.
The services are paid per call via the x402 protocol, so an AI agent can find them, pay a small amount in USDC and get an answer without an account or subscription. Building them taught him APIs, payments, MCP servers, testing, deploying and monitoring live services.`,
  },
  projects: {
    title: "AI projects",
    text: `- ReplyDesk: turns a customer message into a draft reply that follows the company's policies; a human reviews every draft. The idea came from his own customer-service work: answering customer emails took long, so he built a tool where you pick the type of question and AI drafts a reply that you check and adjust, which made handling faster. The public demo uses a fictional company.
- Process Agent: analyses a customer case, checks it against policies and decides which actions may be prepared automatically and which need a person; refunds and cancellations are always blocked until someone approves.
- This Digital Twin: answers questions about his work, only from this profile.
All built with Claude; code on github.com/Fizzl13.`,
  },
  work_style: {
    title: "Work style and strengths",
    text: `Strengths: curious, analytical, creative, commercially minded, customer-focused, a problem solver and a fast learner.
How he improves a process: start at the core of the problem, check with colleagues whether they recognise it, apply a solution, and use AI where it helps. If a first solution doesn't work, he looks for other ways to reach the result.
He works well both independently and with others; others often have insights he hadn't thought of.
He learns by experimenting, courses and videos, documentation, rebuilding examples and learning from mistakes.
What drives him: finding the limits of what is possible.`,
  },
  ai_view: {
    title: "His view on AI",
    text: `He wants AI to take over repetitive work, with a person in control of what matters.
His ideal flow: AI observes or analyses, AI proposes a solution, then it is decided whether a person is needed. If not, AI can act; if so, an employee is informed and handles the case.
Where he does not use AI: confidential information, and autonomously starting or stopping subscriptions or other consequential actions.
A good AI solution actually solves the problem, is technically clear and easy to use.
Responsibility: for an AI error, the maker of the system is responsible; for a human process error, the person carrying out that step.`,
  },
  career: {
    title: "What he is looking for",
    text: `He wants to use AI for business processes and everyday applications that make things easier, faster or simpler.
Roles he is interested in: Junior AI Engineer, AI Automation Specialist, AI Consultant, or AI Business / Process Specialist. The industry is not decisive.
Processes he would most like to improve: administration, customer service, planning and sales; above all, the processing of data.`,
  },
  personal: {
    title: "Outside work",
    text: `Hobbies: mountain biking and wave surfing.`,
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
  { en: "What kind of role is he looking for?", nl: "Wat voor functie zoekt hij?" },
  { en: "How does he think about AI?", nl: "Hoe kijkt hij naar AI?" },
];
