// src/components/Sidebar.tsx
import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-white-500 text-black p-4 flex justify-between items-center">
      <div className="w-64 bg-white h-full text-black p-4">
        <div className="mb-4">
          <button className="text-xl font-bold">Menü schließen X</button>
        </div>
        <nav>
          <ul>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <a href="#" className="block">Zimmerpflanzen (2)</a>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <a href="#" className="block">Gartenpflanzen (2)</a>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <a href="#" className="block">Sukkulenten (1)</a>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <a href="#" className="block">Wasserpflanzen (0)</a>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <a href="#" className="block">Klimabäume (1)</a>
            </li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded">
              <a href="#" className="block">Gartenbedarf (0)</a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
