import type { Metadata } from "next";
import "./globals.css";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "노지용's Portfolio",
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
