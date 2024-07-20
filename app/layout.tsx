import type { Metadata } from "next";
import Link from "next/link";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import Searchbar from "./components/Searchbar";

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
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <header className="p-4 flex flex-col md:flex-row items-center justify-between bg-yellow-400">
            <div className="flex items-center w-full md:w-auto">
              <Link href="/">
                <img src="/Logo.png" className="w-12 h-12" alt="Logo" />
              </Link>
            </div>
            {/*<nav className="flex flex-1 justify-start items-center mt-4 md:mt-0" style={{ marginLeft: '15px' }}>
              <div className="flex gap-2 md:gap-4 text-sm md:text-base flex-nowrap">
                <Link href="/" className="whitespace-nowrap">Home</Link>
                <Link href="/Shop" className="whitespace-nowrap">Shop</Link>
                <Link href="/Kontakt" className="whitespace-nowrap">Kontakt</Link>
                <Link href="/UeberUns" className="whitespace-nowrap">Über uns</Link>
              </div>
            </nav>*/}
            <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-end">
              <Searchbar/>
              <div className="flex items-center bg-black p-3 text-white rounded h-10">
                <Link href="/Warenkorb">Warenkorb</Link>
              </div>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-200 p-4 text-center">
            <Link href="/Impressum">Impressum</Link>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}














/*
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
      <body className="flex flex-col min-h-screen">
        <header className="p-4 flex items-center justify-between" style={{ backgroundColor: "#FDCA40" }}>
          <div className="flex items-center">
            <nav className="ml-8 flex gap-8">
              <Link href="/">
                <img src="/Logo.png" className="w-12 h-12 absolute left-4 top-2" alt="Logo" />
              </Link>
              <Link href="/">Home</Link>
              <Link href="/Shop">Shop</Link>
              <Link href="/Kontakt">Kontakt</Link>
              <Link href="/UeberUns">Über Uns</Link>
            </nav>
          </div>
          <div className="flex items-center bg-white p-2 rounded">
            <input type="search" placeholder="Search" className="w-24 h-4 p-1" />
            <img src="/search-svgrepo-com.svg" className="w-4 h-4 inline" alt="Search" />
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <Link href="/Impressum">Impressum</Link>
        </footer>
      </body>
    </html>
  );
}
*/