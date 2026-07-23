import { MarkupSyncer } from "@/components/MarkupSyncer";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { ServiceWorkerNavigationListener } from "@/components/ServiceWorkerNavigationListener";
import { NetworkStatusBanner } from "@/components/layout/network-status-banner";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";
import { SoftLockScreen } from "@/components/pwa/SoftLockScreen";
// import { HealthMonitor } from "@/components/HealthMonitor";
import { AuthProvider } from "@/context/AuthContext";
import { SoftLockProvider } from "@/context/SoftLockContext";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "FMG - Premium Data & Airtime Services",
    template: "%s | FMG",
  },
  description:
    "Buy cheap data bundles, airtime, and pay bills instantly with FMG. Premium data and airtime services with instant delivery and best prices.",
  keywords: [
    "cheap data",
    "buy airtime",
    "data bundle",
    "mtn data",
    "glo data",
    "airtel data",
    "9mobile data",
    "cheap airtime nigeria",
    "data reseller",
    "bill payment",
    "fmg",
  ],
  authors: [{ name: "FMG" }],
  creator: "FMG",
  publisher: "FMG",
  metadataBase: new URL("https://fmgdatasub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://fmgdatasub.com",
    siteName: "FMG",
    title: "FMG - Premium Data & Airtime Services",
    description:
      "Buy cheap data bundles, airtime, and pay bills instantly. Premium data and airtime services.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "FMG - Premium Data & Airtime Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FMG - Premium Data & Airtime Services",
    description: "Buy cheap data bundles, airtime, and pay bills instantly.",
    images: ["/api/og"],
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "FMG",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "FMG",
    "theme-color": "#25b4d2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Dynamic theme-color based on system preference */}
        <meta
          name="theme-color"
          content="#25b4d2"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#09090b"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FMG" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <AuthProvider>
              <SoftLockProvider>
                {/* <HealthMonitor> */}
                <div data-app-root>
                  <NetworkStatusBanner />
                  <MarkupSyncer />
                  <ServiceWorkerNavigationListener />
                  <PWAInstallPrompt />
                  {/* <FcmSyncer /> */}
                  <Toaster richColors position="top-right" />
                  <SoftLockScreen />
                  {children}
                  <WhatsAppWidget />
                </div>
                {/* </HealthMonitor> */}
              </SoftLockProvider>
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
