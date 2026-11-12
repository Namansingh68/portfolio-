import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Kumar | Full Stack Developer & CS Undergraduate",
  description:
    "Portfolio of Naman Kumar — Computer Science undergraduate at BIT Mesra and aspiring Full Stack Developer specializing in Java, Spring Boot, React, and scalable distributed systems.",
  keywords: [
    "Naman Kumar",
    "Full Stack Developer",
    "Software Engineer",
    "Computer Science",
    "BIT Mesra",
    "Spring Boot",
    "React",
    "CloudVault",
    "Java Developer",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  authors: [{ name: "Naman Kumar", url: "https://github.com/Namansingh68" }],
  creator: "Naman Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Namansingh68",
    title: "Naman Kumar | Full Stack Developer & CS Undergraduate",
    description:
      "Building high-performance digital experiences through clean code, secure backend architectures, and modern UI engineering.",
    siteName: "Naman Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Kumar | Full Stack Developer & CS Undergraduate",
    description:
      "Full Stack Developer & CSE undergraduate at BIT Mesra. Building resilient web applications with Java, Spring Boot, and React.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
