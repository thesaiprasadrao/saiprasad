import SectionHeading from "./SectionHeading";
import { stack } from "@/src/data";

export default function StackSection() {
  return (
    <div style={{ marginBottom: 8 }}>
      <SectionHeading>Stack</SectionHeading>
      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 28,
      }}>
        {stack.map(({ label, items }) => (
          <li key={label} style={{ fontSize: "0.92rem", fontWeight: 300 }}>
            <span style={{ color: "var(--muted)" }}>{label} — </span>
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
}
