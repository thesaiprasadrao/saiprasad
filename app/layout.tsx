import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
