//Hier soll ein Shop implementiert werden
export default function Home() {
    return (
      <div>
        <h1>Hier ist der Shop</h1>
      </div>
    );
}

// Im folgenden Code gibt es noch ein Problem, daher auskommentiert

 /*
import { useEffect, useState } from "react";
import plantsData from "../../data/plants.json";
import PlantCard from "../components/PlantCard";

const Shop: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    // Simuliere das Laden der Daten (hier aus einer JSON-Datei)
    setPlants(plantsData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default Shop;
*/