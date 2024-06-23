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
        <header style={{backgroundColor: "#FDCA40"}}>
          <img src="/burger-menu-svgrepo-com.svg" style={{width: 50, height: 50}}></img>
          <Link href={"/"}>Home</Link>
          <Link href={"/Shop"}>Shop</Link>
          <Link href={"/Kontakt"}>Kontakt</Link>
          <Link href={"Impressum"}>Über Uns</Link>
          <div style={{backgroundColor: "white", alignItems: "start", width: "150px", }}>
            <input type="search" placeholder="Search" style={{width: 100, height: 17}}></input>
            <img src={"/search-svgrepo-com.svg"} style={{width: 17, height: 17, display: "inline"}}></img>
          </div>
          <Link href="/"><img src="/Logo.png" style={{width: 50, height: 50}}></img></Link>
        </header>
        <main>{ children }</main>
        <footer style={{backgroundColor: "#EEEEEE"}}>
          <Link href="/Impressum">Impressum</Link>
        </footer>
      </body>
    </html>
  );
}
