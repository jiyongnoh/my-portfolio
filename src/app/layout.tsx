import StyledComponentsRegistry from "../../lib/registry";
import Nav from "../../components/Nav";
import "./globals.css";

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
