import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gebo Presence App",
  description: "Local-first Presence application for the Gebo Owner Node"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
