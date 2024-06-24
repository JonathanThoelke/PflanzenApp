import PlantCard from "../components/PlantCard";

//Hier soll ein Shop implementiert werden
export default function Home() {
    return (
      <div>
        <h1>Hier ist der Shop</h1>
        <PlantCard />
      </div>
    );
}


// Im folgenden Code gibt es noch ein Problem, daher auskommentiert
/*
 
import { useEffect, useState } from "react";
import plantsData from "../../data/plants.json";
import PlantCard from "../components/PlantCard";

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
}

export default function Shop() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Simuliere das Laden der Daten (hier aus einer JSON-Datei)
    setPlants(plantsData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Hier ist der Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => (
          <PlantCard key={plant.ID} plant={plant} />
        ))}
      </div>
    </div>
  );
}

*/