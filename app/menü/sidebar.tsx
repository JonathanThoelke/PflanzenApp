// src/components/Sidebar.tsx
import React from 'react';
import plantsData from "../../data/plants.json";
import Link from 'next/link';

export default function Navigation() {
  const numZimmer = plantsData.filter(item => 
    item.kategorien.includes("Zimmerpflanze")).length;
  const numGarten = plantsData.filter(item => 
    item.kategorien.includes("Gartenpflanze")).length;
  const numSukk = plantsData.filter(item => 
    item.kategorien.includes("Sukkulente")).length;
  const numWasser = plantsData.filter(item => 
    item.kategorien.includes("Wasserpflanze")).length;
  const numKlima = plantsData.filter(item => 
    item.kategorien.includes("Klimabaum")).length;
  const numBedarf = 0;
  
  return (
    <nav className="bg-white-500 text-black p-4 flex justify-between items-center z-10 fixed top-16 -left-400 -left-60 transition-left active:-left-0 ease-in-out duration-700">
      <div className="w-64 bg-white h-full text-black p-4">
        {/*<div className="mb-4">
          <button className="text-xl font-bold">Menü schließen X</button>
        </div>*/}
        <nav>
          <ul>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded"><Link href="/" className="block">Home</Link></li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded"><Link href="/Shop" className="block">Shop</Link></li>
          </ul>
          <ul>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <Link className="block" href="/Pflanzen?cat=Zimmerpflanze">Zimmerpflanzen {numZimmer}</Link>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <Link className="block" href="/Pflanzen?cat=Gartenpflanze">Gartenpflanzen {numGarten}</Link>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <Link className="block" href="/Pflanzen?cat=Sukkulente">Sukkulenten {numSukk}</Link>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <Link className="block" href="/Pflanzen?cat=Wasserpflanze">Wasserpflanzen {numWasser}</Link>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <Link className="block" href="/Pflanzen?cat=Klimabaum">Klimabäume {numKlima}</Link>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <Link className="block" href="#">Gartenbedarf {numBedarf}</Link>
            </li>
          </ul>
          <ul>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded"><Link href="/Kontakt" className="block">Kontakt</Link></li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded"><Link href="/UeberUns" className="block">Über uns</Link></li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
