import Link from "next/link";
import Divider from "@/src/components/Divider";
import Footer from "@/src/components/Footer";
import { writings } from "@/src/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return writings.map(w => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = writings.find(w => w.slug === params.slug);
  return { title: post ? `${post.title} — Saiprasad Rao` : "Not found" };
}

export default function WritingPost({ params }: Props) {
  const post = writings.find(w => w.slug === params.slug);
  if (!post) notFound();

  return (
    <div
      className="container"
      style={{ maxWidth: 600, margin: "0 auto", padding: "56px 24px 80px" }}
    >
      <div style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: "0.8rem",
        color: "var(--muted)",
        letterSpacing: "0.04em",
        marginBottom: 36,
      }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>saiprasadrao.dev</Link>
        {" / "}
        <Link href="/writing" style={{ color: "var(--muted)", textDecoration: "none" }}>writing</Link>
        {` / ${post.slug}`}
      </div>

      <h1 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: 8 }}>{post.title}</h1>

      <div style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: "0.75rem",
        color: "var(--muted)",
        marginBottom: 32,
      }}>
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric", month: "long", year: "numeric",
        })}
      </div>

      {/* ── Drop your MDX content here ── */}
      <div style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}>
        <p>
          This is a placeholder for <strong>{post.title}</strong>.
        </p>
        <p>
          To add real content, install <code>@next/mdx</code> and create{" "}
          <code>content/writing/{post.slug}.mdx</code>. The README has full instructions.
        </p>
      </div>

      <Divider />
      <Footer />
    </div>
  );
}
