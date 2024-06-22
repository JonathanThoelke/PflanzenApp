import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link"

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
    <html lang="de">
      <body>
        <header style={{backgroundColor: "#FDCA40", padding: "1rem"}}>
          <img src="/burger-menu-svgrepo-com.svg" style={{width: 50,height:50}}></img>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Shop">Shop</Link></li>
            <li><Link href="/Pflanzen">Pflanzen</Link></li>
          </ul>
          <form>
            <label>Suche:</label>
            <input type="search"></input>
            <input type="submit"></input>
          </form>
        </header>
        <main>{ children }</main>
        <footer style={{backgroundColor: "#EEEEEE"}}>
          <Link href="/Impressum">Impressum</Link>
        </footer>
      </body>
    </html>
  );
}
