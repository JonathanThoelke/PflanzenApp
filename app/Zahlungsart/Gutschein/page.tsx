// Gutschein

import React, { useState } from 'react';

function GutscheinEinloesen() {
  const [gutscheincode, setGutscheincode] = useState('');
  const [eingeloest, setEingeloest] = useState(false);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setGutscheincode(e.target.value);
  };

  const handleEinloesen = () => {
    // Hier kannst du die Logik zum Einlösen des Gutscheins hinzufügen
    console.log('Gutschein eingelöst:', gutscheincode);
    setEingeloest(true);
  };

  return (
    <div>
      <div>
        <label htmlFor="gutscheincode">Gutscheincode:</label>
        <input 
          type="text" 
          id="gutscheincode" 
          value={gutscheincode} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <button onClick={handleEinloesen}>Gutschein einlösen</button>
      </div>
      {eingeloest && (
        <div>
          <p>Gutschein {gutscheincode} wurde erfolgreich eingelöst!</p>
        </div>
      )}
    </div>
  );
}

export default GutscheinEinloesen;
