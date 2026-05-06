import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "상상우리 매칭 시스템",
  description: "시니어 일자리 자동 매칭 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 text-lg">
        <header className="bg-blue-700 text-white px-6 py-4 shadow-md">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              🌱 상상우리
            </Link>
            <nav className="flex gap-4 text-base font-medium sm:ml-auto">
              <Link href="/register" className="hover:underline underline-offset-4">
                프로필 등록
              </Link>
              <Link href="/recommendations" className="hover:underline underline-offset-4">
                추천 목록
              </Link>
              <Link href="/admin" className="hover:underline underline-offset-4">
                담당자 대시보드
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t">
          © 2026 상상우리 · 시니어 일자리 매칭 플랫폼
        </footer>
      </body>
    </html>
  );
}
