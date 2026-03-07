type Props = { children: React.ReactNode };

export default function SectionHeading({ children }: Props) {
  return (
    <div style={{
      fontFamily: "'Geist Mono', monospace",
      fontSize: "0.8rem",
      fontWeight: 500,
      color: "var(--muted)",
      letterSpacing: "0.05em",
      marginBottom: 16,
    }}>
      {children}
    </div>
  );
}
