export type Project = {
  name: string;
  href: string;
  desc: string;
  tags: string[];
  badge: string | null;
  live?: string | null;
  github?: string | null;
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  desc: string;
  url?: string;
  badge?: string;
};

export type StackItem = {
  label: string;
  items: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Writing = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Second Brain",
    href: "https://2nd-brain.saiprasadrao.in/",
    desc: "A self-hosted AI assistant for automated message organization, intent-based task extraction, and semantic knowledge retrieval across Telegram and WhatsApp.",
    tags: ["Node.js", "SQLite"],
    badge: "🧠",
    live: "https://2nd-brain.saiprasadrao.in/",
    github: "https://github.com/thesaiprasadrao/second-brain",
  },
  {
    name: "BlackBox",
    href: "https://github.com/thesaiprasadrao/blackbox",
    desc: "A self-hosted OpenAI-compatible LLM gateway providing authenticated GPT-style inference APIs with reliable Ollama orchestration, request observability, and usage analytics.",
    tags: ["FastAPI", "SQLite"],
    badge: "🤖",
    live: "https://blackbox.saiprasadrao.in",
    github: "https://github.com/thesaiprasadrao/blackbox",
  },
  {
    name: "Safar Saathi",
    href: "https://safarsathi.saiprasadrao.in/",
    desc: "Real-time bus tracking system with 3-second location updates, built for high-frequency data streaming.",
    tags: ["Node.js", "Supabase", "TypeScript", "Fastify", "REST API"],
    badge: "🚍",
    live: "https://safarsathi.saiprasadrao.in/",
    github: "https://github.com/thesaiprasadrao/safar-saathi",
  },
  {
    name: "ScamShield",
    href: "#",
    desc: "AI-powered scam detection tool that extracts and analyzes text from screenshots using OCR.",
    tags: ["Next.js", "FastAPI", "Pytesseract", "NextAuth", "OCR"],
    badge: "🕵️‍♂️",
    live: "https://scam-sheild.saiprasadrao.in/",
    github: "https://github.com/thesaiprasadrao/scam-sheild-analyzer",
  },
  {
    name: "Mood Diary",
    href: "https://thesaiprasadrao.github.io/mood-diary/",
    desc: "Privacy-first journaling app with local-only storage and instant mood insights.",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "😊",
    live: "https://thesaiprasadrao.github.io/mood-diary/",
    github: null,
  },
];

export const stack: StackItem[] = [
  { label: "languages",    items: "C++, Java, JavaScript, TypeScript" },
  { label: "frontend",     items: "React.js, Next.js, TailwindCSS, Three.js" },
  { label: "backend",      items: "Node.js, Fastify, Express, Spring, FastAPI" },
  { label: "databases",    items: "MySQL, PostgreSQL, MongoDB, Supabase" },
  { label: "tools",        items: "Git, Docker, Swagger, Figma" },
];

export const experiences: Experience[] = [
   {
    role : "Software Developer Intern" ,
    company : "OpenText" ,
    date : "Aug 2026 - Ongoing" ,
    desc: "",
    badge: "📂",
  } ,
  {
    role: "Backend Developer Intern",
    company: "Devnovate",
    date: "Jan 2026 - Jul 2026",
    desc: `Built and scaled an automated certificate generation and email system delivering 100,000+ certificates/day for devnovate.co.`,
    badge: "🚀",
  },
];

export const extras: string[] = [
  "🛠️ Technical Team Lead @ Udbhava",
];

export const navLinks: NavLink[] = [
  { label: "home",     href: "/" },
  { label: "writing",  href: "/writing" },
  { label: "github",   href: "https://github.com/thesaiprasadrao" },
  { label: "linkedin", href: "https://www.linkedin.com/in/saiprasadrao/" },
];

export const writings: Writing[] = [
  {
    slug: "nobody-reads-fixed-stuff",
    title: "nobody reads \"fixed stuff\" and thinks anything good about you",
    date: "2026-01-01",
    description: "Your commit history is a diary for a version of yourself that has forgotten everything. Say what changed, not that something changed.",
  },
  {
    slug: "ai-jailbreak-ctf",
    title: "I built an AI jailbreak CTF and lived to tell about it",
    date: "2026-09-16",
    description: "A month of building, breaking, and almost shipping a broken CTF for Phoenix 3.0.",
  },
];
