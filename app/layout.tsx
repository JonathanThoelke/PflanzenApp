import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
        <header className="p-4 flex justify-between items-center" style={{backgroundColor: "#FDCA40"}}>
          <img src="/burger-menu-svgrepo-com.svg" className="w-12 h-12" alt="Menu" />
          <nav className="flex gap-8">
            <Link href="/"><a>Home</a></Link>
            <Link href="/Shop"><a>Shop</a></Link>
            <Link href="/Kontakt"><a>Kontakt</a></Link>
            <Link href="/Impressum"><a>Über Uns</a></Link>
          </nav>
          <div className="flex items-center bg-white p-2 rounded">
            <input type="search" placeholder="Search" className="w-24 h-4 p-1" />
            <img src="/search-svgrepo-com.svg" className="w-4 h-4 inline" alt="Search" />
          </div>
          <Link href="/"><a><img src="/Logo.png" className="w-12 h-12" alt="Logo" /></a></Link>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <Link href="/Impressum"><a>Impressum</a></Link>
        </footer>
      </body>
    </html>
  );
}
