import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // better control for headings/body
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Portfolio metadata
export const metadata: Metadata = {
  title: "Uday Singh | Portfolio",
  description:
    "Personal portfolio of Uday Singh — Computer Science & AI student. Showcasing projects in Blockchain, AI, and Cloud Computing.",
  keywords: [
    "Uday Singh",
    "Portfolio",
    "Blockchain Developer",
    "AI Engineer",
    "Cloud Computing",
    "Full Stack Developer",
  ],
  authors: [{ name: "Uday Singh", url: "https://www.linkedin.com/in/udaysingh13112005/" }],
  openGraph: {
    title: "Uday Singh | Portfolio",
    description:
      "Explore my projects in Blockchain, AI, and Cloud Computing. Built with Next.js and modern web technologies.",
    url: "https://yourdomain.com", // replace with your deployed domain
    siteName: "Uday Singh Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Uday Singh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Singh | Portfolio",
    description:
      "Computer Science & AI student | Projects in Blockchain, AI, and Cloud Computing.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@your_twitter_handle", // optional
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
