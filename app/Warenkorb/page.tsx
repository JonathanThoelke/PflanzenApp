/*
'use client';

import { useCart } from '../context/CartContext';
import { Plant as PlantType } from '../interfaces';

const Cart = () => {
  const { state, dispatch } = useCart();

  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.preis.replace('€', '').replace(',', '.'));
      return total + (price * item.quantity);
    }, 0).toFixed(2); // Formatierung auf zwei Dezimalstellen
  };

  // Funktion zum Entfernen von Artikeln aus dem Warenkorb
  const handleRemoveFromCart = (plant: PlantType) => {
    dispatch({ type: 'REMOVE_FROM_CART', plant });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-black p-4 rounded text-white w-full max-w-3xl">
        <h1 className="text-3xl mb-4 text-center">Warenkorb</h1>
        {state.items.length === 0 ? (
          <p className="text-center">Ihr Warenkorb ist leer</p>
        ) : (
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <div className="flex items-center space-x-4">
                  <img src={item.imagePath} alt={item.deutscherName} className="w-16 h-16 object-cover rounded"/>
                  <div>
                    <h2 className="text-xl font-bold">{item.deutscherName}</h2>
                    <p>{item.lateinischerName}</p>
                    <p>{item.preis} x {item.quantity}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <button 
                    onClick={() => handleRemoveFromCart(item)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded flex items-center justify-center"
                    style={{ width: '24px', height: '24px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <h2 className="text-2xl font-bold">Gesamt: {calculateTotalPrice()}€</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
*//*
'use client';

import { useCart } from '../context/CartContext';
import { Plant as PlantType } from '../interfaces';
import { useState } from 'react';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [address, setAddress] = useState({ firstName: '', lastName: '', street: '', houseNumber: '', postalCode: '', city: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiryDate: '', cvc: '' });

  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.preis.replace('€', '').replace(',', '.'));
      return total + (price * item.quantity);
    }, 0).toFixed(2); // Formatierung auf zwei Dezimalstellen
  };

  // Funktion zum Entfernen von Artikeln aus dem Warenkorb
  const handleRemoveFromCart = (plant: PlantType) => {
    dispatch({ type: 'REMOVE_FROM_CART', plant });
  };

  // Funktion zur Handhabung der Bestellungsaufgabe
  const handlePlaceOrder = () => {
    if (!address.firstName || !address.lastName || !address.street || !address.houseNumber || !address.postalCode || !address.city || !paymentMethod) {
      alert('Bitte füllen Sie alle Adressfelder aus und wählen Sie eine Zahlungsmethode.');
      return;
    }

    if (paymentMethod === 'creditCard' && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvc)) {
      alert('Bitte füllen Sie alle Kreditkartenfelder aus.');
      return;
    }

    // Hier kannst du den Bestellvorgang hinzufügen
    alert(`Bestellung aufgegeben!\nAdresse: ${address.firstName} ${address.lastName}, ${address.street} ${address.houseNumber}, ${address.postalCode} ${address.city}\nZahlungsmethode: ${paymentMethod}\nGesamt: ${calculateTotalPrice()}€`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-black p-4 rounded text-white w-full max-w-3xl">
        <h1 className="text-3xl mb-4 text-center">Warenkorb</h1>
        {state.items.length === 0 ? (
          <p className="text-center">Ihr Warenkorb ist leer</p>
        ) : (
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <div className="flex items-center space-x-4">
                  <img src={item.imagePath} alt={item.deutscherName} className="w-16 h-16 object-cover rounded"/>
                  <div>
                    <h2 className="text-xl font-bold">{item.deutscherName}</h2>
                    <p>{item.lateinischerName}</p>
                    <p>{item.preis} x {item.quantity}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <button 
                    onClick={() => handleRemoveFromCart(item)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded flex items-center justify-center"
                    style={{ width: '24px', height: '24px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">Vorname</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={address.firstName} 
                  onChange={(e) => setAddress({ ...address, firstName: e.target.value })} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Nachname</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={address.lastName} 
                  onChange={(e) => setAddress({ ...address, lastName: e.target.value })} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="street" className="block text-sm font-medium text-gray-200">Straße</label>
                  <input 
                    type="text" 
                    id="street" 
                    value={address.street} 
                    onChange={(e) => setAddress({ ...address, street: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="w-1/4">
                  <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-200">Nummer</label>
                  <input 
                    type="text" 
                    id="houseNumber" 
                    value={address.houseNumber} 
                    onChange={(e) => setAddress({ ...address, houseNumber: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-200">PLZ</label>
                  <input 
                    type="text" 
                    id="postalCode" 
                    value={address.postalCode} 
                    onChange={(e) => setAddress({ ...address, postalCode: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-200">Ort</label>
                  <input 
                    type="text" 
                    id="city" 
                    value={address.city} 
                    onChange={(e) => setAddress({ ...address, city: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">Zahlungsmethode</label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="sofort" 
                      checked={paymentMethod === 'sofort'} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-white">Sofort</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="creditCard" 
                      checked={paymentMethod === 'creditCard'} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-white">Kreditkarte</span>
                  </label>
                </div>
              </div>
              {paymentMethod === 'creditCard' && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-200">Kartennummer</label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      value={cardDetails.cardNumber} 
                      onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} 
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/3">
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-200">Gültig bis (MM/JJ)</label>
                      <input 
                        type="text" 
                        id="expiryDate" 
                        value={cardDetails.expiryDate} 
                        onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                      />
                    </div>
                    <div className="w-1/3">
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-200">CVC</label>
                      <input 
                        type="text" 
                        id="cvc" 
                        value={cardDetails.cvc} 
                        onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })} 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                      />
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === 'sofort' && (
                <div className="mt-4">
                  <a href="https://www.sofort.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Mit Online-Banking bezahlen</a>
                </div>
              )}
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">Gesamt: {calculateTotalPrice()}€</h2>
              <button 
                onClick={handlePlaceOrder}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Bestellung aufgeben
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;*/
'use client';

import { useCart } from '../context/CartContext';
import { Plant as PlantType } from '../interfaces';
import { useState } from 'react';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [address, setAddress] = useState({ firstName: '', lastName: '', street: '', houseNumber: '', postalCode: '', city: '' });
  const [email, setEmail] = useState('');

  const calculateTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.preis.replace('€', '').replace(',', '.'));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleRemoveFromCart = (plant: PlantType) => {
    dispatch({ type: 'REMOVE_FROM_CART', plant });
  };

  const handlePlaceOrder = async () => {
    if (!address.firstName || !address.lastName || !address.street || !address.houseNumber || !address.postalCode || !address.city || !email) {
      alert('Bitte füllen Sie alle Adressfelder aus und geben Sie Ihre E-Mail-Adresse ein.');
      return;
    }

    try {
      const response = await fetch('/api/sendMail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          address,
          items: state.items,
          total: calculateTotalPrice(),
        }),
      });

      if (response.ok) {
        alert('Bestellung aufgegeben! Eine Bestätigungs-E-Mail wurde gesendet.');
      } else {
        alert('Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      alert('Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-black p-4 rounded text-white w-full max-w-3xl">
        <h1 className="text-3xl mb-4 text-center">Warenkorb</h1>
        {state.items.length === 0 ? (
          <p className="text-center">Ihr Warenkorb ist leer</p>
        ) : (
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <div className="flex items-center space-x-4">
                  <img src={item.imagePath} alt={item.deutscherName} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-xl font-bold">{item.deutscherName}</h2>
                    <p>{item.lateinischerName}</p>
                    <p>{item.preis} x {item.quantity}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <button 
                    onClick={() => handleRemoveFromCart(item)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded flex items-center justify-center"
                    style={{ width: '24px', height: '24px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">Vorname</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={address.firstName} 
                  onChange={(e) => setAddress({ ...address, firstName: e.target.value })} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Nachname</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={address.lastName} 
                  onChange={(e) => setAddress({ ...address, lastName: e.target.value })} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="street" className="block text-sm font-medium text-gray-200">Straße</label>
                  <input 
                    type="text" 
                    id="street" 
                    value={address.street} 
                    onChange={(e) => setAddress({ ...address, street: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="w-1/4">
                  <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-200">Nummer</label>
                  <input 
                    type="text" 
                    id="houseNumber" 
                    value={address.houseNumber} 
                    onChange={(e) => setAddress({ ...address, houseNumber: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-200">PLZ</label>
                  <input 
                    type="text" 
                    id="postalCode" 
                    value={address.postalCode} 
                    onChange={(e) => setAddress({ ...address, postalCode: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-200">Ort</label>
                  <input 
                    type="text" 
                    id="city" 
                    value={address.city} 
                    onChange={(e) => setAddress({ ...address, city: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">E-Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                />
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">Gesamt: {calculateTotalPrice()}€</h2>
              <button 
                onClick={handlePlaceOrder}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Bestellung aufgeben
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
