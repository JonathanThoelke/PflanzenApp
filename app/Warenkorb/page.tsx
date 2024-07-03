// Warenkorb

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