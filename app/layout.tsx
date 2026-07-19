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

const siteUrl = "https://cheziangelicaw.example.com"; // Menyesuaikan dengan domain sitemap Anda sebelumnya

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jery Mechael — UI/UX Designer & Front-End Developer",
    template: "%s · Jery Mechael",
  },
  description:
    "Fresh Informatics graduate from Universitas Mercu Buana Yogyakarta with hands-on experience in technical project development, UI/UX design, and front-end system development.",
  keywords: [
    "Jery Mechael",
    "Jery Mechael Pentagon Lumbantoruan",
    "UI/UX Designer",
    "Front-End Developer",
    "Informatics Graduate",
    "Web Developer Portfolio",
    "Universitas Mercu Buana Yogyakarta",
  ],
  authors: [{ name: "Jery Mechael Pentagon Lumbantoruan" }],
  openGraph: {
    title: "Jery Mechael — UI/UX Designer & Front-End Developer",
    description:
      "Fresh Informatics graduate from Universitas Mercu Buana Yogyakarta with hands-on experience in technical project development, UI/UX design, and front-end system development.",
    url: siteUrl,
    siteName: "Jery Mechael Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jery Mechael — UI/UX Designer & Front-End Developer",
    description:
      "Fresh Informatics graduate with hands-on experience in UI/UX design and front-end web development.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}