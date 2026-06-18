import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const panelSans = localFont({
  src: "./fonts/fonnts.com-Panel_Sans_Regular.otf",
  variable: "--font-panel-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JC Pereira Advocacia",
  description: "Advocacia e Assessoria Jurídica",
  icons: {
    icon: "/flavicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${panelSans.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}