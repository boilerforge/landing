import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BoilerForge - Ship Your SaaS in Days, Not Months",
  description:
    "Production-ready Next.js SaaS starter kit with authentication, Stripe payments, and dashboard. Stop building boilerplate. Start building your product.",
  keywords: [
    "SaaS starter",
    "Next.js boilerplate",
    "SaaS template",
    "Stripe integration",
    "NextAuth",
  ],
  authors: [{ name: "BoilerForge" }],
  openGraph: {
    title: "BoilerForge - Ship Your SaaS in Days, Not Months",
    description:
      "Production-ready Next.js SaaS starter kit with authentication, Stripe payments, and dashboard.",
    url: "https://boilerforge.dev",
    siteName: "BoilerForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoilerForge - Ship Your SaaS in Days, Not Months",
    description:
      "Production-ready Next.js SaaS starter kit with authentication, Stripe payments, and dashboard.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
