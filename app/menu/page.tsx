'use client';
import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        Menü {isOpen ? 'schließen' : 'öffnen'}
      </button>
      {isOpen && (
        <ul>
          <li>Zimmerpflanzen (2)</li>
          <li>Gartenpflanzen (2)</li>
          <li>Sukkulenten (1)</li>
          <li>Wasserpflanzen (0)</li>
          <li>Klimabäume (1)</li>
          <li>Gartenbedarf (0)</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
