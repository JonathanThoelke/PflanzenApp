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
    
    let exclusive = !!searchParams.get('exc') || false;
    let nameDE = searchParams.get('name');
    let nameLT = searchParams.get('nameL');
    let desc = searchParams.get('desc');

    useEffect(() => {
        let filteredList = new Array();
        //Je nachdem, ob 'OR' oder 'AND' gesucht werden soll muss das Array entsprechend
        //leer oder voll initialisiert werden
        if(exclusive) {
            filteredList = plants
        }
        //Hier die Funktionen der Filter implementieren
        if(nameDE != null){
            nameDE = nameDE.toLowerCase();
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.deutscherName.toLowerCase().includes(nameDE));
            }
            else
            {
                let addendum = plants.filter(item =>
                    item.deutscherName.toLowerCase().includes(nameDE)
                );
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }

        if(nameLT != null){
            nameLT = nameLT.toLowerCase();
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.lateinischerName.toLowerCase().includes(nameLT));
            }
            else
            {
                let addendum = plants.filter(item =>
                    item.lateinischerName.toLowerCase().includes(nameLT)
                );
                console.log(addendum.length);
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        if(desc != null){
            desc = desc.toLowerCase();
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.beschreibung.toLowerCase().includes(desc));
            }
            else
            {
                let addendum = plants.filter(item =>
                    item.beschreibung.toLowerCase().includes(desc)
                );
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        setPlants(filteredList);
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