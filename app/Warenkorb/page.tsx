/*'use client';

import { useCart } from '../context/CartContext';
import { Plant as PlantType } from '../interfaces';

const Cart = () => {
  const { state, dispatch } = useCart();

  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotalPrice = () => {
    return state.items.reduce((total, plant) => {
      // Entfernen Sie das €-Zeichen und wandeln Sie den Preis in eine Zahl um
      const price = parseFloat(plant.preis.replace('€', '').replace(',', '.'));
      return total + price;
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
              {state.items.map((plant, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                  <div className="flex items-center space-x-4">
                    <img src={plant.imagePath} alt={plant.deutscherName} className="w-16 h-16 object-cover rounded"/>
                    <div>
                      <h2 className="text-xl font-bold">{plant.deutscherName}</h2>
                      <p>{plant.lateinischerName}</p>
                      <p>{plant.preis}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    <button 
                      onClick={() => handleRemoveFromCart(plant)}
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
                <h2 className="text-2xl font-bold">Gesamtpreis: {calculateTotalPrice()}€</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Cart;


*/

'use client';

import { useCart } from '../context/CartContext';
import { Plant as PlantType } from '../interfaces';

const Cart = () => {
  const { state, dispatch } = useCart();

  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotalPrice = () => {
    return state.items.reduce((total, plant) => {
      // Entfernen Sie das €-Zeichen und wandeln Sie den Preis in eine Zahl um
      const price = parseFloat(plant.preis.replace('€', '').replace(',', '.'));
      return total + price;
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
            {state.items.map((plant, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                <div className="flex items-center space-x-4">
                  <img src={plant.imagePath} alt={plant.deutscherName} className="w-16 h-16 object-cover rounded"/>
                  <div>
                    <h2 className="text-xl font-bold">{plant.deutscherName}</h2>
                    <p>{plant.lateinischerName}</p>
                    <p>{plant.preis}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <button 
                    onClick={() => handleRemoveFromCart(plant)}
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
              <h2 className="text-2xl font-bold">Gesamtpreis: {calculateTotalPrice()}€</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
