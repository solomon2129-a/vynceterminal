import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CinematicOverlays } from "@/components/layout/CinematicOverlays";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VYNCE // ARCHIVAL_SIGNAL",
  description: "Discovered research terminal. Experimental motion, interface studies, and digital fragments.",
};

export const viewport: Viewport = {
  themeColor: "#080808",
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
      <body className="min-h-full flex flex-col bg-abyss text-ash selection:bg-pulse selection:text-abyss">
        <CinematicOverlays />
        <Navbar />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
