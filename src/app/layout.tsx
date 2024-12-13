import StyledComponentsRegistry from "../../lib/registry";
import Nav from "../../components/Nav";
import "./globals.css";

export const revalidate = 0; // SSG 활성화

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Nav />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
