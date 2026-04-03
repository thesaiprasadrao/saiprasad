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
  //
  {
  name: "Second Brain",
  href: "https://thesaiprasadrao.github.io/second-brain/",
  desc: "Personal AI assistant for WhatsApp or Telegram that processes messages in <3s, supports multimedia parsing, and enables semantic search across notes.",
  tags: ["Node.js", "SQLite", "LLM Inference", "Embeddings"],
  badge: "🤖",
  live: "https://thesaiprasadrao.github.io/second-brain/",
  github: "https://github.com/thesaiprasadrao/second-brain",
} ,
  {
    name: "Safar Saathi",
    href: "#",
    desc: "Real-time bus tracking platform with live location updates every 3 seconds. Built on Node.js, Supabase, and Fastify with full Swagger docs.",
    tags: ["Node.js", "Supabase", "TypeScript", "Fastify", "REST API"],
    badge: "🚍",
    live: null,
    github: "https://github.com/thesaiprasadrao/safar-saathi",
  },
  {
    name: "ScamShield",
    href: "#",
    desc: "AI-powered scam analyzer using OCR (Pytesseract) to extract text from suspicious screenshots. Next.js + FastAPI + NextAuth.",
    tags: ["Next.js", "FastAPI", "Pytesseract", "NextAuth", "OCR"],
    badge: "🕵️‍♂️",
    github: "https://github.com/thesaiprasadrao/scam-sheild-analyzer",
  },
  {
    name: "Mood Diary",
    href: "#",
    desc: "Privacy-first journaling app. 100% local storage, mood analytics, sub-100ms interactions.",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "😊",
    live: "https://thesaiprasadrao.github.io/mood-diary/",
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
    role: "Backend Developer Intern",
    company: "HackWithIndia",
    date: "Jan 2026 - Present",
    desc: `Contributed to core platform development of <a href="https://devnovate.co" target="_blank" rel="noopener noreferrer">devnovate.co</a> and built a fully automated certificate generation and email delivery system capable of sending 100,000+ certificates per day.`,
    badge: "🚀",
  }
];

export const extras: string[] = [
  "🛠️ Technical Team Lead @ Udbhava",
  "🥈 Top 10 — CodeFury 8.0 National Hackathon (UVCE)",
];

export const navLinks: NavLink[] = [
  { label: "home",     href: "/" },
  { label: "writing",  href: "/writing" },
  { label: "github",   href: "https://github.com/thesaiprasadrao" },
  { label: "linkedin", href: "https://www.linkedin.com/in/saiprasadrao/" },
];

// Placeholder writings — replace with real MDX slugs later
export const writings: Writing[] = [
  
];
