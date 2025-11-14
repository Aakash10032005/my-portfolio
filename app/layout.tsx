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
  title: "Aakash Gurumurthi - Portfolio",
  description: "Portfolio of Aakash Gurumurthi, a student and app/frontend developer. Explore my projects, skills, and experience in Flutter, React, and more.",
  keywords: ["Aakash Gurumurthi", "portfolio", "developer", "student", "Flutter", "React", "Next.js", "app development"],
  authors: [{ name: "Aakash Gurumurthi" }],
  openGraph: {
    title: "Aakash Gurumurthi - Portfolio",
    description: "Portfolio of Aakash Gurumurthi, a student and app/frontend developer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Gurumurthi - Portfolio",
    description: "Portfolio of Aakash Gurumurthi, a student and app/frontend developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
