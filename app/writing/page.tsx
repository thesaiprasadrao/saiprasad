import Link from "next/link";
import Divider from "@/src/components/Divider";
import Footer from "@/src/components/Footer";
import SectionHeading from "@/src/components/SectionHeading";
import { writings } from "@/src/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Saiprasad Rao",
};

export default function WritingPage() {
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
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
          saiprasadrao.dev
        </Link>
        {" / writing"}
      </div>

      <SectionHeading>Writing</SectionHeading>

      {writings.length === 0 ? (
        <div style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: 28 }}>
          coming soon
        </div>
      ) : (
        <ul style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 28,
        }}>
          {[...writings].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(({ slug, title, date, description }) => (
            <li key={slug}>
              <Link
                href={`/writing/${slug}`}
                style={{ fontWeight: 500, fontSize: "0.95rem" }}
              >
                {title}
              </Link>
              <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 2 }}>
                {description}
              </div>
              <div style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--muted)",
                marginTop: 2,
              }}>
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </div>
            </li>
          ))}
        </ul>
      )}

      <Divider />
      <Footer />
    </div>
  );
}
