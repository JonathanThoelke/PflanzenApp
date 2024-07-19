"use client"

import { useEffect, useState } from "react";
import { Plant as PlantType } from "../../interfaces";
import plantsData from "../../../data/plants.json";
import PlantCard from "@/app/components/PlantCard";



export default function Search({ params }: {
  params: {
    slug: string[];
  }
}) {
  const [plants, setPlants] = useState<PlantType[]>([]);

  useEffect(() => {
    setPlants(plantsData);  //Default alle Daten im useState

    const searchTerm = params.slug[0];
    let searched = plantsData.filter(item =>
        item.deutscherName.toLowerCase().includes(searchTerm.toLowerCase()) 
        || item.lateinischerName.toLowerCase().includes(searchTerm.toLowerCase()) 
        || item.gattung.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setPlants(searched);
  }, []);



  //Die gesuchten Elemente werden ausgegeben
  return (
    <div>
        {plants.map((plant) => (
        <div key={plant.ID} className="flex justify-center">
            <PlantCard plant={plant} />
        </div>
        ))}
    </div>
  );
}
