import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMeta } from "@/data/portfolio";
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
  title: `${siteMeta.name} — ${siteMeta.role}`,
  description: `${siteMeta.name}의 포트폴리오. ${siteMeta.role}로서의 프로젝트, 경력, 스킬을 소개합니다.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
