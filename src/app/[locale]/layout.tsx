import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandName, isLocale, locales } from "@/lib/content";
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "@fontsource/plus-jakarta-sans/vietnamese-400.css";
import "@fontsource/plus-jakarta-sans/vietnamese-500.css";
import "@fontsource/plus-jakarta-sans/vietnamese-600.css";
import "@fontsource/plus-jakarta-sans/vietnamese-700.css";
import "@fontsource/plus-jakarta-sans/vietnamese-800.css";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = locale === "vi"
    ? `${brandName} — Từ nông trại đến niềm tin`
    : `${brandName} — From the farm. Built on trust.`;
  const description = locale === "vi"
    ? `Kết nối nông trại và người mua bằng bằng chứng thu hoạch, đất, carbon và nguồn gốc minh bạch trên Solana. Khám phá ${brandName}.`
    : `Connect farms and buyers through transparent harvest, soil, carbon and provenance evidence on Solana. Discover ${brandName}.`;
  return {
    title,
    description,
    applicationName: brandName,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    alternates: { languages: { en: "/en", vi: "/vi", "x-default": "/en" } },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? "en_US" : "vi_VN",
      siteName: brandName,
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale}><body>{children}</body></html>;
}
