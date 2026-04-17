import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClientVisualWrapper } from "@/components/ui/ClientVisualWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI Customer Support Agent",
  description: "RAG-based support agent using Supabase and vector search.",
};

import AuthListener from "@/components/auth/AuthListener";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <ClientVisualWrapper />
        <AuthListener />
        {children}
      </body>
    </html>
  );
}
