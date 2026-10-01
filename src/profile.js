// Everything the twin knows: the public CV (cv.fizzl.eu) plus what Frits chose
// to share about how he works, his view on AI, the role he is looking for and
// his hobbies, that he has two children, his x402 and AI-building know-how, examples of his work and his trading research. No other private details (his age, the children's names or ages), nothing internal about
// employers. The twin may not answer beyond this.

export const PERSON = "Frits";

export const SECTIONS = {
  profile: {
    title: "Profile",
    text: `Frits is a Customer Success specialist with 4+ years of experience in customer retention, account growth and consultative selling, based in the Amsterdam area (Netherlands). Next to that he builds and runs AI tools in production: four live services that AI agents find and pay for per call, with monitoring, tests and signed, auditable results. His brand is FIZZL (fizzl.eu).`,
  },
  fizzl: {
    title: "FIZZL, AI builder (2026 to present)",
    text: `Independent. Designed, built and runs four live pay-per-call services for AI agents, built with Claude and Claude Code:
- presign-guard: a green, orange or red verdict before an agent or wallet signs a transaction, approval or signature, with reason codes and a signed receipt.
- x402 Doctor: checks a paid API the way a paying agent would, with a fix for every problem.
- PlainText: presign-guard's verdict on wallet approvals, explained in plain language for people.
- Ichimoku Signal: Ichimoku Cloud trading signals and a ranked scan of 148 coins.
Agents pay in USDC on Base or Solana via the x402 protocol, with no account or API key. Each service has an MCP server and is listed in the Coinbase Bazaar. He also published two npm packages for agent developers: x402-safe-fetch and presign-guard-wallet.
He owns everything end to end: product idea, design decisions, security model, deploys and running it in production. He builds with Claude Code: he specifies, reviews every change and decides what ships.`,
  },
  mediahuis: {
    title: "Mediahuis, Customer Success & Sales Specialist (2024 to present)",
    text: `Manages a portfolio of 200+ B2C subscription customers of a news and media publisher. Focus on retention, account expansion, customer communication and cross-functional coordination. Worked on proactive retention interventions, upsell and cross-sell opportunities and escalation handling. Results as stated on his CV: about 20% churn reduction, 15 to 25% account uplift, 30% fewer escalations, response time under 4 hours. Works with Salesforce.`,
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
Customer success: relationship management, needs analysis, customer retention; Salesforce CRM and Microsoft Office 365.
AI & agents: Claude API and Claude Code, prompt design, RAG with automated evaluation, MCP servers and tools for AI agents, guardrails where the model explains but never decides.
Backend & APIs: Node.js / Express APIs, OpenAPI specs, scheduled jobs, caching, timeouts and fallbacks, rate limits and free quotas. Basic Python.
Security & reliability: secrets management, signed receipts for every verdict, timing-safe service-to-service authentication, sanctions screening, health checks, monitoring and debugging from logs.
Web & tooling: Git and GitHub, GitHub Actions (tests, deploys, scheduled runs), Render, npm with trusted publishing, Playwright, HTML/CSS/JS and bilingual sites (Dutch and English).
Web3 & payments: x402 payments in USDC on Base and Solana, ERC-20 approvals, EIP-712 and Permit2 signatures, wallet-security data (GoPlus, on-chain RPC).
Data & research: CRM-based account analysis, usage dashboards, backtests with random-entry controls and public paper tests with fixed rules.`,
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
    text: `- presign-guard looks at a transaction, approval or signature before a wallet or agent signs it and returns green, orange or red with reason codes: unlimited approvals, approvals to a plain wallet instead of a contract, sanctioned addresses, brand-new wallets, wallets that run delegated code (EIP-7702), honeypot or fake tokens, and tokens whose issuer can pause or freeze transfers. It can also audit all open token approvals of a wallet. Every paid verdict carries a signed receipt.
- x402 Doctor checks a paid API before an AI agent pays for it: does it answer, are its payment terms valid, what does it cost, on which network, with a concrete fix for every problem. A $0.001 preflight says go, caution or no_go; a deeper check makes a real small test payment.
- PlainText is the version for people: it takes presign-guard's verdict and explains it in plain language (for example "this would let a personal wallet spend all of your USDC"). People get 3 free checks a day without a wallet; agents pay $0.03 to $0.04.
- Ichimoku Signal gives Ichimoku Cloud signals, price levels and a ranked scan of 148 coins. The setup list is presented as a screener, not a strategy. Its signals and a trend-following paper test are tracked publicly (no real money is traded).
The services are paid per call via the x402 protocol, so an AI agent can find them, pay a small amount in USDC and get an answer without an account or subscription.`,
  },
  x402: {
    title: "His knowledge of x402 and payments for AI agents",
    text: `How x402 works, from building and running four live services with it: an agent calls a paid endpoint, the server answers HTTP 402 with a payment challenge (price, network, token, payout address), the agent signs a USDC payment and repeats the request, and a facilitator verifies and settles it so the answer comes back in the same request. He supports the "exact" scheme on Base and Solana.
- Discovery: his services are listed in the Coinbase CDP Bazaar, publish machine-readable descriptions (OpenAPI, /.well-known files) and offer MCP servers, so agents can find and call them as tools.
- Trust before paying: x402 Doctor's $0.001 preflight tells an agent go / caution / no_go before it pays an unknown endpoint. He published x402-safe-fetch on npm: a fetch for agents that runs that check first and never pays above a set budget.
- x402 Trust Index: a daily scan of every resource in the Bazaar with a rolling track record (up to 30 days) of whether each endpoint was actually payable; public as an API and as open data.
- Signed receipts: paid answers come with a signature, so a buyer can later prove what it received.
- Agent identity: three of his agents are registered on the Metaplex Agent Registry on Solana (EIP-8004 registration), with x402 support declared.
- Operations: monitoring of all four services, a usage log and weekly reports of outside use.
- Wallet safety know-how (presign-guard, PlainText): token approvals, Permit / Permit2 and Seaport signatures, honeypot tokens, mint and freeze powers.
What he learned from running them: agents and indexers find paid endpoints easily and check prices a lot, but few pay yet; choosing and trusting a service is the real bottleneck, and clear, consistent pricing matters more than features. He shares this in the x402 community, for example as feedback on session-based payment and ranking ideas.`,
  },
  ai_building: {
    title: "How he builds with AI",
    text: `He builds with Claude and Claude Code, from idea to live service:
- Claude API: structured outputs with a JSON schema, prompt caching, the right effort level per task, handling refusals and a fallback model, and treating user input as data so prompt injection doesn't change the rules.
- Guardrails: in PlainText the verdict comes from fixed checks in presign-guard and the model only explains it; it is told never to change or soften the verdict.
- Safe public demos: the system prompt and company data stay on the server, with rate limits and a daily cap per demo; a human reviews AI drafts, and consequential actions (refunds, cancellations) always need a person.
- Beyond text: voice in this Digital Twin (speech recognition and read-aloud).
- Engineering: Node.js APIs, automated tests, GitHub Actions for tests and deploys, Render and Strato hosting, browser tests and screenshots with Playwright, monitoring and analytics.
Most of his code is open on github.com/Fizzl13.`,
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
Roles he is interested in: a customer-facing role at a company that builds AI agents or voice AI (solutions, customer success or partnerships), or Junior AI Engineer, AI Automation Specialist, AI Consultant, or AI Business / Process Specialist. Amsterdam or remote. The industry is not decisive.
Processes he would most like to improve: administration, customer service, planning and sales; above all, the processing of data.`,
  },
  personal: {
    title: "Outside work",
    text: `He is a father of two children. Hobbies: mountain biking and wave surfing.`,
  },
  approach: {
    title: "How he works",
    text: `Customer first: people should feel heard and see their problem actually solved. He likes to use AI where it removes repetitive work, with a human in control of anything that matters: drafts are reviewed, risky actions are approved by a person.`,
  },
  examples: {
    title: "Examples of how he works",
    text: `Concrete examples from running his services:
- Connecting two services: he rebuilt PlainText so its verdicts come from presign-guard through an internal, key-protected connection, then tested it live. A wallet with hundreds of approvals fell back to a slower path; the logs showed a timeout at exactly 15 seconds, so he raised the limit and response time dropped from about 50 to about 24 seconds, with the full verdict and signed receipt.
- Cleaning up data: his usage log showed scanners calling the APIs with dummy inputs such as "test" or "1". He added a filter, checked it against four days of real data, and his dashboard went from about 2,300 to about 1,100 visible calls, with only real use left and no paid call hidden.
- Honest testing: when a feature (a list of trade setups) did not beat a random control after costs, he stopped presenting it as a strategy and called it a screener instead.`,
  },
  research: {
    title: "Trading research and paper tests",
    text: `He tests trading ideas before trusting them, with walk-forward backtests and controls:
- Ichimoku setups: compared with random entries on the same coins and direction, they showed no edge, and every rank group was negative after fees and spread.
- Ichimoku time theory: no measurable effect.
- Time-series momentum (hold a coin only while its recent trend is positive, otherwise cash) on the 30 largest coins held up against random holding schedules across lookbacks of 7 to 56 days, mainly through smaller drawdowns.
- Since 1 October 2026 a forward paper test runs with frozen rules: the trend rule, a variant that skips coins with crowded funding, buy-and-hold and BTC only. It is public, uses no real money, and will be reviewed after three months.
He discusses these results openly, for example on Reddit (r/algotrading).`,
  },
  contact: {
    title: "Contact",
    text: `Via the contact button on cv.fizzl.eu, LinkedIn (linkedin.com/in/fritszwager), or fizzl.eu. His CV can be downloaded as a PDF on cv.fizzl.eu.`,
  },
};

export const SECTION_IDS = Object.keys(SECTIONS);

export const SUGGESTIONS = [
  { en: "What experience does Frits have with customer retention?", nl: "Welke ervaring heeft Frits met klantbehoud?" },
  { en: "What has he built with AI?", nl: "Wat heeft hij met AI gebouwd?" },
  { en: "What does Frits do at Mediahuis?", nl: "Wat doet Frits bij Mediahuis?" },
  { en: "What kind of role is he looking for?", nl: "Wat voor functie zoekt hij?" },
  { en: "How does he think about AI?", nl: "Hoe kijkt hij naar AI?" },
  { en: "What does he know about x402 and AI agents?", nl: "Wat weet hij van x402 en AI-agents?" },
  { en: "Can you give an example of how he solves problems?", nl: "Kun je een voorbeeld geven van hoe hij problemen oplost?" },
];
