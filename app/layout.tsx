import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/ui/SkipToContent";
import ChatWidget from "@/components/ui/ChatWidget";
import { WebVitals } from "@/components/WebVitals";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { personalInfo } from "@/lib/data";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://euxhenjonex.com"),
  title: {
    default: `${personalInfo.name} - Specialista Integrazione AI e Developer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    "Integrazione AI",
    "GPT Personalizzati",
    "Agenti RAG",
    "Automazione n8n",
    "Sviluppo Chatbot",
    "Bot Telegram",
    "Bot WhatsApp",
    "Sviluppo No-Code",
    "Pinecone",
    "Database Vettoriali",
    "Soluzioni AI",
    "Automazione Workflow",
    "Developer Next.js",
    "Developer React",
  ],
  authors: [{ name: personalInfo.name, url: "https://euxhenjonex.com" }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    url: "https://euxhenjonex.com",
    title: `${personalInfo.name} - Specialista Integrazione AI`,
    description: personalInfo.bio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary",
    title: `${personalInfo.name} - Specialista Integrazione AI`,
    description: personalInfo.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Euxhenjo Nexhipi",
    alternateName: "Euxhenjo Nex",
    jobTitle: "AI Integration Specialist",
    description:
      "AI Integration Specialist helping businesses and creators integrate AI agents, chatbots and automated workflows to save time and get measurable results.",
    url: "https://euxhenjonex.com",
    email: personalInfo.email,
    sameAs: [
      "https://www.linkedin.com/in/euxhenjonex/",
      "https://x.com/euxhenjonex",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Integration",
      "Automations",
      "No-Code Development",
      "Chatbot Development",
      "GPT Agents",
      "RAG Systems",
      "n8n Automation",
      "Telegram Bots",
      "WhatsApp Bots",
      "Vector Databases",
      "Next.js",
      "React",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Resource Hints for Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        
        {/* Preload Critical Font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-J128K5CWPX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J128K5CWPX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <SkipToContent />
        <WebVitals />
        <SmoothScroll />
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={true}
          forcedTheme="dark"
        >
          <Toaster position="bottom-right" richColors />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
