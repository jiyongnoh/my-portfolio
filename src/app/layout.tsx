import type { Metadata } from "next";
import "./globals.css";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "노지용's Portfolio",
  icons: {
    icon: "/favicon.ico?v=1", // 캐시 무효화
    shortcut: "/favicon.ico?v=1",
    apple: "/favicon.ico?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
