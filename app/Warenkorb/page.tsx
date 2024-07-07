'use client';

import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state } = useCart();

  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotalPrice = () => {
    return state.items.reduce((total, plant) => {
      // Entfernen Sie das €-Zeichen und wandeln Sie den Preis in eine Zahl um
      const price = parseFloat(plant.preis.replace('€', '').replace(',', '.'));
      return total + price;
    }, 0).toFixed(2); // Formatierung auf zwei Dezimalstellen
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
                <div>
                  <h2 className="text-xl font-bold">{plant.deutscherName}</h2>
                  <p>{plant.lateinischerName}</p>
                  <p>{plant.preis}</p>
                </div>
                <img src={plant.imagePath} alt={plant.deutscherName} className="w-16 h-16 object-cover rounded"/>
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




/*'use client';

import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state } = useCart();

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
                <div>
                  <h2 className="text-xl font-bold">{plant.deutscherName}</h2>
                  <p>{plant.lateinischerName}</p>
                  <p>{plant.preis}</p>
                </div>
                <img src={plant.imagePath} alt={plant.deutscherName} className="w-16 h-16 object-cover rounded"/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
*/


/*
'use client';

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-black p-4 rounded text-white"
                style={{ width: '80%', margin: 'auto', marginTop: '20px', borderRadius: '8px' }}>
                <div className="flex justify-center items-center" style={{ height: '100%' }}>
                    <span className="text-xl">Warenkorb</span>
                </div>
            </div>
        </div>
    );
}
*/
/*

interface Plant {
  ID: number;
  deutscherName: string;
  lateinischerName: string;
  gattung: string;
  haustiergeeigent: boolean;
  gießenProWoche: number;
  duengenProMonat: number;
  lichtbedarf: number;
  wuchshöhe: number;
  bluetezeit: number[] | null;
  preis: string;
  imagePath: string;
  beschreibung: string;
}

export default function Shop() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Hier ist der Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {plants.map((plant) => (
          <div key={plant.ID} className="flex justify-center">
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
    </div>
  );
}
*/