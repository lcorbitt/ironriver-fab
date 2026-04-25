import type { Metadata } from "next";
import { Barlow, JetBrains_Mono, Oswald } from "next/font/google";
import { Footer } from "@frontend/components/Footer";
import { NavBar } from "@frontend/components/NavBar";
import { ScrollToTopOnNavigate } from "@/components/ScrollToTopOnNavigate";
import { StructuredData } from "@/components/StructuredData";
import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const defaultOgImage = absoluteUrl("/ir-logo.png");

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.businessName} | Expert Welding Services in Northern Colorado & Surrounding Areas`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: [
    "fabrication Berthoud Colorado",
    "metal fabrication Northern Colorado",
    "custom welding Berthoud",
    "structural steel Colorado",
    "metal fab Front Range",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Expert Welding Services in Northern Colorado & Surrounding Areas`,
    description: siteConfig.description,
    images: [
      {
        url: defaultOgImage,
        alt: `${siteConfig.businessName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.businessName} | Expert Welding Services in Northern Colorado & Surrounding Areas`,
    description: siteConfig.description,
    images: [defaultOgImage],
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
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="font-display fixed left-4 top-4 z-100 -translate-y-24 rounded-sm border border-border bg-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground opacity-0 shadow-[0_4px_24px_rgb(0_0_0_/_0.35)] transition-[transform,opacity] duration-300 ease-industrial focus:translate-y-0 focus:opacity-100"
        >
          Skip to main content
        </a>
        <StructuredData />
        <ScrollToTopOnNavigate />
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
