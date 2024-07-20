'use client'
//SearchComponent
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Plant as PlantType } from "../interfaces";
import PlantCard from "../components/PlantCard";
import plantsData from "../../data/plants.json";


const Pflanzen: React.FC = () => {
    const [plants, setPlants] = useState<PlantType[]>(plantsData);
    const searchParams = useSearchParams();
    //Suchbedingungen werden aus URL entnommen - könnte erweitert werden 
    //mit z.B. '&haustier=false' für Suchbedingungen für nicht-Textbasierte Suche
    //oder Suche nach 'NameDE', 'NameLatein' etc könnten separiert werden.
    let searchTerm = searchParams.get('search') || '';
    searchTerm = searchTerm.toLowerCase();

    useEffect(() => {
        //Hier die Funktionen der Filter implementieren
        const searched = plants.filter(item => 
            item.deutscherName.toLowerCase().includes(searchTerm)
            || item.lateinischerName.toLowerCase().includes(searchTerm) 
            || item.gattung.toLowerCase().includes(searchTerm)
        );
        setPlants(searched);
    }, []);

    return (
        <div className="p-4">
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

export default Pflanzen;