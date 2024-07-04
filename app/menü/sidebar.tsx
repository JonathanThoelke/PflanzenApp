// Menü 

"use client";

import React, { useState } from 'react';


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-50`}>
      <div className="p-4">
        <button className="text-xl font-bold mb-4" onClick={toggleSidebar}>
        </button>
        <ul>
          <li className="mb-2"><a href="#zimmerpflanzen">Zimmerpflanzen (2)</a></li>
          <li className="mb-2"><a href="#gartenpflanzen">Gartenpflanzen (2)</a></li>
          <li className="mb-2"><a href="#sukkulenten">Sukkulenten (1)</a></li>
          <li className="mb-2"><a href="#wasserpflanzen">Wasserpflanzen (0)</a></li>
          <li className="mb-2"><a href="#klimabaume">Klimabäume (1)</a></li>
          <li className="mb-2"><a href="#gartenbedarf">Gartenbedarf (0)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
