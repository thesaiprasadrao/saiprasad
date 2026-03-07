export type Project = {
  name: string;
  href: string;
  desc: string;
  tags: string[];
  badge: string | null;
  live: string | null;
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
    name: "Safar Saathi",
    href: "#",
    desc: "Real-time bus tracking platform with live location updates every 3 seconds. Built on Node.js, Supabase, and Fastify with full Swagger docs.",
    tags: ["Node.js", "Supabase", "TypeScript", "Fastify", "REST API"],
    badge: "🚍",
    live: null,
  },
  {
    name: "ScamShield",
    href: "#",
    desc: "AI-powered scam analyzer using OCR (Pytesseract) to extract text from suspicious screenshots. Next.js + FastAPI + NextAuth.",
    tags: ["Next.js", "FastAPI", "Pytesseract", "NextAuth", "OCR"],
    badge: "🕵️‍♂️",
    live: null,
  },
  {
    name: "BruteForce Hackathon Page",
    href: "#",
    desc: "High-performance landing page with Three.js 3D visuals and a terminal-style onboarding interface.",
    tags: ["Next.js", "Three.js", "TypeScript", "Locomotive.js"],
    badge: "🏆",
    live: "https://bruteforcecsbs.dev",
  },
  {
    name: "OneVote",
    href: "#",
    desc: "Anonymous voting system with IP-based single-vote enforcement, Chart.js admin dashboard, and a clean TailwindCSS UI.",
    tags: ["Node.js", "Express", "MySQL", "Chart.js", "TailwindCSS"],
    badge: "🗳️",
    live: null,
  },
  {
    name: "Mood Diary",
    href: "#",
    desc: "Privacy-first journaling app. 100% local storage, mood analytics, sub-100ms interactions.",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "😊",
    live: "#",
  },
];

export const stack: StackItem[] = [
  { label: "languages",    items: "C++, Java, JavaScript, TypeScript" },
  { label: "frontend",     items: "React.js, Next.js, TailwindCSS, Three.js" },
  { label: "backend",      items: "Node.js, Fastify, Express, Spring, FastAPI" },
  { label: "databases",    items: "MySQL, PostgreSQL, MongoDB, Supabase" },
  { label: "tools",        items: "Git, Docker, Swagger, JMeter, Figma" },
  { label: "specialties",  items: "OCR (Pytesseract), NextAuth, real-time systems" },
];

export const wins: string[] = [
  "🥇 Top 5 — Udaya 1.0 Intercollegiate Hackathon",
  "🥈 Top 10 — CodeFury 8.0 National Hackathon (UVCE)",
  "🛠️ Technical Team , Udbhava — mentored 20+ teams",
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
