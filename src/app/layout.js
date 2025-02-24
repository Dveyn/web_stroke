import { Header } from "@@/components/layout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        { children }
      </body>
    </html>
  );
}
