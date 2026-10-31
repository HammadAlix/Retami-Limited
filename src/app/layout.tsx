import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retami Limited | AI Agency & Software Engineering",
  description: "Retami Limited is an AI agency offering software and AI engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
