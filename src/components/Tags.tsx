type Props = { tags: string[] };

export default function Tags({ tags }: Props) {
  return (
    <div style={{
      marginTop: 4,
      fontFamily: "'Geist Mono', monospace",
      fontSize: "0.75rem",
      color: "var(--muted)",
      letterSpacing: "0.02em",
    }}>
      {tags.map(t => `[${t}]`).join(" ")}
    </div>
  );
}
