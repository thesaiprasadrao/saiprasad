import Link from "next/link";
import { execSync } from "child_process";
import SpotifyNowPlaying from "@/src/components/SpotifyNowPlaying";
import { navLinks } from "@/src/data";

function getLastUpdated(): string {
  try {
    const date = execSync('git log -1 --format=%cd --date=format:"%B %Y"', {
      cwd: process.cwd(),
    }).toString().trim();
    return date || "unknown";
  } catch {
    return "unknown";
  }
}

export default function Footer() {
  const lastUpdated = getLastUpdated();
  return (
    <>
      <nav style={{
        marginTop: 35,
        display: "flex",
        flexWrap: "wrap",
        fontFamily: "'Geist Mono', monospace",
        fontSize: "0.8rem",
      }}>
        {navLinks.map(({ label, href }, i) => {
          const isExternal = href.startsWith("http");
          return (
            <span key={label}>
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--muted)", textDecoration: "none", paddingRight: 8 }}
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  style={{ color: "var(--muted)", textDecoration: "none", paddingRight: 8 }}
                >
                  {label}
                </Link>
              )}
              {i < navLinks.length - 1 && (
                <span style={{ color: "var(--border)", paddingRight: 8, userSelect: "none" }}>
                  /
                </span>
              )}
            </span>
          );
        })}
      </nav>
      <div style={{
        marginTop: 60,
        fontFamily: "'Geist Mono', monospace",
        fontSize: "0.75rem",
        color: "var(--muted)",
        letterSpacing: "0.02em",
        textAlign: "center",
      }}>
        Estd in 2006 · Last updated {lastUpdated}
        <br />
        © Saiprasad Rao.
      </div>
      <SpotifyNowPlaying />
    </>
  );
}
