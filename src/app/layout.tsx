import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";
import { UtmCapture } from "@/components/layout/utm-capture";
import { GoogleAnalytics } from "@/components/layout/analytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meet Hub Financial Services — Accounting, Advisory & Travel Services",
    template: "%s | Meet Hub Financial Services",
  },
  description:
    "Pakistan's integrated professional services firm — accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel services.",
  keywords: [
    "accounting services Pakistan",
    "tax consultancy",
    "SECP company registration",
    "bookkeeping",
    "visiting CFO",
    "ERP implementation",
    "Skardu tour package",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileBottomBar />
          <UtmCapture />
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
