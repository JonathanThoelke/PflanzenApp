// components/PaymentMethods.js
import React, { useState } from 'react';

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="p-4 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Versand- und Zahlungsarten</h2>
      <div>
        <label className="block mb-2">Versandart</label>
        <p>DHL Paket: 5,90€</p>
      </div>
      <div>
        <label className="block mt-4 mb-2">Zahlungsart</label>
        <button className="block mb-2" onClick={() => setSelectedMethod('Kreditkarte')}>Kreditkarte</button>
        <button className="block mb-2" onClick={() => setSelectedMethod('Sofortzahlung')}>Sofortzahlung</button>
        <button className="block mb-2" onClick={() => setSelectedMethod('Auf Rechnung')}>Auf Rechnung</button>
        <button className="block mb-2" onClick={() => setSelectedMethod('Gutschein einlösen')}>Gutschein einlösen</button>
      </div>
      {selectedMethod && <p className="mt-4">Ausgewählte Zahlungsart: {selectedMethod}</p>}
    </div>
  );
}
