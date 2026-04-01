import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziad Bakki",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        {/* Ambient gradient glows */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-blue-500/[0.03] blur-[120px]" />
          <div className="absolute top-[60%] -left-[10%] h-[60vh] w-[60vh] rounded-full bg-purple-500/[0.03] blur-[120px]" />
          <div className="absolute top-[30%] -right-[10%] h-[50vh] w-[50vh] rounded-full bg-teal-500/[0.02] blur-[120px]" />
        </div>
        {/* Dot grid overlay */}
        <div className="bg-dot-grid pointer-events-none fixed inset-0 -z-10" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
