import type { Metadata } from "next";
import { Barlow, JetBrains_Mono, Oswald } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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

const ogImage =
  "https://images.unsplash.com/photo-1504917595217-d002dc953781?auto=format&fit=crop&w=1200&h=630&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.businessName} | Metal fabrication Berthoud CO`,
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
    title: `${siteConfig.businessName} | Metal fabrication Berthoud CO`,
    description: siteConfig.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Precision metal fabrication and welding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Metal fabrication Berthoud CO`,
    description: siteConfig.description,
    images: [ogImage],
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
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
