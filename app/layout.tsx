import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/src/components/ScrollReveal";
import ThemeToggle from "@/src/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Saiprasad Rao",
  description: "CS undergrad at DSCE, Bengaluru. I build things for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeToggle />
        <ScrollReveal>{children}</ScrollReveal>
      </body>
    </html>
  );
}
