'use client';

import { useCart } from '../context/CartContext';
import { Plant as PlantType } from '../interfaces';
import { useState } from 'react';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [address, setAddress] = useState({ firstName: '', lastName: '', street: '', houseNumber: '', postalCode: '', city: '' });
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const calculateTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.preis.replace('€', '').replace(',', '.'));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleRemoveFromCart = (plant: PlantType) => {
    dispatch({ type: 'REMOVE_FROM_CART', plant });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handlePlaceOrder = async () => {
    if (!validateEmail(email)) {
      setEmailError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    } else {
      setEmailError('');
    }

    if (!address.firstName || !address.lastName || !address.street || !address.houseNumber || !address.postalCode || !address.city || !email) {
      alert('Bitte füllen Sie alle Adressfelder aus und geben Sie Ihre E-Mail-Adresse ein.');
      return;
    }

    try {
      const response = await fetch('/api/sendMail', {
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
      <div className="bg-[#000300] p-4 rounded text-white w-full max-w-3xl">
        <h1 className="text-3xl mb-4 text-center">Warenkorb</h1>
        {state.items.length === 0 ? (
          <p className="text-center">Ihr Warenkorb ist leer</p>
        ) : (
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-[#0D1321] rounded">
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
            <h2 className="text-2xl font-bold mt-6 mb-2">Liefer- und Rechnungsadresse</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">Vorname</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={address.firstName} 
                  onChange={(e) => setAddress({ ...address, firstName: e.target.value })} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Nachname</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={address.lastName} 
                  onChange={(e) => setAddress({ ...address, lastName: e.target.value })} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
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
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
                  />
                </div>
                <div className="w-1/4">
                  <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-200">Nummer</label>
                  <input 
                    type="text" 
                    id="houseNumber" 
                    value={address.houseNumber} 
                    onChange={(e) => setAddress({ ...address, houseNumber: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
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
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-200">Ort</label>
                  <input 
                    type="text" 
                    id="city" 
                    value={address.city} 
                    onChange={(e) => setAddress({ ...address, city: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#0D1321] text-white"
                />
                {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">Gesamt: {calculateTotalPrice()}€</h2>
              <button 
                onClick={handlePlaceOrder}
                className="mt-4 bg-[#90AD97] hover:bg-[#dfe8e1] text-white font-bold py-2 px-4 rounded transition duration-200"
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
