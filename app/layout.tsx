import type { Metadata } from "next";
import { Sora, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = "https://cheziangelicaw.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jery Mechael — HR & People Professional",
    template: "%s · Jery Mechael",
  },
  description:
    "Fresh Psychology graduate with hands-on HR Operations experience — recruitment, employee administration, and training coordination. Portfolio & resume.",
  keywords: [
    "Jery Mechael",
    "HR Officer",
    "People Professional",
    "Psychology Graduate",
    "HR Portfolio",
    "Human Resources",
  ],
  authors: [{ name: "Jery Mechael" }],
  openGraph: {
    title: "Jery Mechael — HR & People Professional",
    description:
      "Fresh Psychology graduate with hands-on HR Operations experience — recruitment, employee administration, and training coordination.",
    url: siteUrl,
    siteName: "Jery Mechael",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jery Mechael — HR & People Professional",
    description:
      "Fresh Psychology graduate with hands-on HR Operations experience in recruitment, administration, and training coordination.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}