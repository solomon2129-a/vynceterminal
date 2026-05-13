import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CinematicOverlays } from "@/components/layout/CinematicOverlays";
import { SessionProvider } from "@/context/SessionContext";
import { AppContent } from "@/components/layout/AppContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vynce // terminal",
  description: "Internal research terminal. Unstable interface fragments and digital architecture.",
  verification: {
    other: {
      "p:domain_verify": "8519528fec295ebc234eb6331b586aa3",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black font-mono">
        <CinematicOverlays />
        <SessionProvider>
          <AppContent>{children}</AppContent>
        </SessionProvider>
      </body>
    </html>
  );
}
