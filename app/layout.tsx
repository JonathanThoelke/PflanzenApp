import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pflanzen-App",
  description: "Eine App für Pflanzen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{backgroundColor: "#FDCA40", padding: "1rem"}}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Shop">Shop</a></li>
            <li><a href="/Pflanzen">Pflanzen</a></li>
            <li>
              <form>
                <label>Suche:</label>
                <input type="search"></input>
                <input type="submit"></input>
              </form>
            </li>
          </ul>
        </header>
        <main>{ children }</main>
        <footer style={{backgroundColor: "#EEEEEE"}}>
          <a href="/Impressum">Impressum</a>
        </footer>
      </body>
    </html>
  );
}
