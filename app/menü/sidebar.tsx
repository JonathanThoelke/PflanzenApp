import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-yellow-500 h-full">
      <div className="p-4">
        <button className="text-xl font-bold mb-4">Menü schließen X</button>
        <ul>
          <li className="mb-2">Zimmerpflanzen (2)</li>
          <li className="mb-2">Gartenpflanzen (2)</li>
          <li className="mb-2">Sukkulenten (1)</li>
          <li className="mb-2">Wasserpflanzen (0)</li>
          <li className="mb-2">Klimabäume (1)</li>
          <li className="mb-2">Gartenbedarf (0)</li>
        </ul>
      </div>
    </div>
  );
}