import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Side Hustle AI | Discover Your Next Side Hustle",
  description:
    "Explore expert side hustle ideas, step-by-step guides, and proven strategies to transform your free time into a profitable business. Get inspired and unlock your entrepreneurial potential with Side Hustle AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1861495067845215"
          crossorigin="anonymous"
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="mt-20">{children}</div>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
