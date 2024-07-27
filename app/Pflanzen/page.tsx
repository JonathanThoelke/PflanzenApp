'use client'
//SearchComponent
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import plantsData from "../../data/plants.json";
import PlantCard from "../components/PlantCard";
import { Plant as PlantType } from "../interfaces";


const Pflanzen: React.FC = () => {
    const [plants, setPlants] = useState<PlantType[]>(plantsData);
    const searchParams = useSearchParams();
    //Suchbedingungen werden aus URL entnommen - könnte erweitert werden 
    //mit z.B. '&haustier=false' für Suchbedingungen für nicht-Textbasierte Suche
    //oder Suche nach 'NameDE', 'NameLatein' etc könnten separiert werden.
    
    let exclusive = (searchParams.get('and') !== 'false');
    let nameDE = searchParams.get('name');
    let nameLT = searchParams.get('nameL');
    let desc = searchParams.get('desc');
    let category = searchParams.get('cat');
    let height = searchParams.get('h');
    let light = searchParams.get('light');
    let pet = searchParams.get('pet');
    let bloom = searchParams.get('blüte');
    let water = searchParams.get('water');

    useEffect(() => {
        let filteredList: PlantType[] = exclusive ? plants : [];
        //Je nachdem, ob 'OR' oder 'AND' gesucht werden soll muss das Array entsprechend
        //leer oder voll initialisiert werden
        const lowerCase = (str: string | null) => str ? str.toLowerCase() : '';

        //Hier die Funktionen der Filter implementieren
        if(nameDE != null){
            const lowerCaseNameDE = lowerCase(nameDE);
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.deutscherName.toLowerCase().includes(lowerCaseNameDE));
            }
            else
            {
                const addendum = plants.filter(item =>
                    item.deutscherName.toLowerCase().includes(lowerCaseNameDE)
                );
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        if(nameLT != null){
            const lowerCaseNameLT = lowerCase(nameLT);
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.lateinischerName.toLowerCase().includes(lowerCaseNameLT));
            }
            else
            {
                const addendum = plants.filter(item =>
                    item.lateinischerName.toLowerCase().includes(lowerCaseNameLT)
                );
                console.log(addendum.length);
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        if(desc != null){
            const lowerCaseDesc = lowerCase(desc);
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.beschreibung.toLowerCase().includes(lowerCaseDesc));
            }
            else
            {
                const addendum = plants.filter(item =>
                    item.beschreibung.toLowerCase().includes(lowerCaseDesc)
                );
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        if(category != null){
            if(exclusive)
            {
                filteredList = filteredList.filter(item => 
                    item.kategorien.includes(category));
            }
            else
            {
                const addendum = plants.filter(item =>
                    item.kategorien.includes(category)
                );
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        if(height != null){
            const heightNum = parseInt(height);
            if (!isNaN(heightNum)) {
                if (exclusive) {
                    filteredList = filteredList.filter(item => 
                        item.wuchshöhe <= heightNum);
                } else {
                    const addendum = plants.filter(item =>
                    item.wuchshöhe <= heightNum
                );
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
                }
            }
        }
        if(light != null){
            const lightNum = parseInt(light);
            if (!isNaN(lightNum)) {
                if(exclusive)
                {
                    filteredList = filteredList.filter(item => 
                        item.lichtbedarf <= lightNum);
                }
                else
                {
                    const addendum = plants.filter(item =>
                        item.lichtbedarf <= lightNum
                    );
                    filteredList = Array.from(new Set(filteredList.concat(addendum)));
                }
            }
        }
        if (water) {
            const validWaterValues = ["täglich", "wöchentlich", "seltener"];
            if (validWaterValues.includes(water)) {
                if (exclusive) {
                    filteredList = filteredList.filter(item => 
                        item.gießenProWoche === validWaterValues.indexOf(water));
                } else {
                    const addendum = plants.filter(item => 
                        item.gießenProWoche === validWaterValues.indexOf(water));
                    filteredList = Array.from(new Set(filteredList.concat(addendum)));
                }
            }
        }
        if (pet) {
            const petBoolean = pet === "true";
            if (exclusive) {
                filteredList = filteredList.filter(item => 
                    item.haustiergeeigent === petBoolean);
            } else {
                const addendum = plants.filter(item => 
                    item.haustiergeeigent === petBoolean);
                filteredList = Array.from(new Set(filteredList.concat(addendum)));
            }
        }
        if(bloom != null){
            const bloomNum = parseInt(bloom);
            if (!isNaN(bloomNum)) {
                if(exclusive)
                {
                    filteredList = filteredList.filter(item => 
                        item.bluetezeit == null || item.bluetezeit.includes(bloomNum));
                }
                else
                {
                    const addendum = plants.filter(item =>
                        item.bluetezeit == null || item.bluetezeit.includes(bloomNum)
                    );
                    filteredList = Array.from(new Set(filteredList.concat(addendum)));
                }
            }
        }

        setPlants(filteredList);
    }, [searchParams, exclusive, nameDE, nameLT, desc, category, height, light, water, pet, bloom]);

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