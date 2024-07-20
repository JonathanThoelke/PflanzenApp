"use client"

import { useEffect, useState } from "react";
import { Plant as PlantType } from "../../interfaces";
import PlantCardDetailed from "@/app/components/PlantCardDetailed";
import plantsData from "../../../data/plants.json";


const dummy:PlantType = {
  "ID": 0,
    "deutscherName": "",
    "lateinischerName": "",
    "gattung": "",
    "haustiergeeigent": false,
    "gießenProWoche": 0,
    "duengenProMonat": 0,
    "lichtbedarf": 0,
    "wuchshöhe": 0,
    "bluetezeit": [],
    "preis": "0",
    "imagePath": "",
    "beschreibung": ""
}

export default function Plant({ params }: {
  params: {
    slug: string[];
  }
}) {
  const [plant, setPlant] = useState<PlantType>(dummy);

  useEffect(() => {
    // Simuliere das Laden der Daten (hier aus einer JSON-Datei)
    var searched = plantsData.find((item) => item.ID === parseInt(params.slug[0]));
    if(searched != null)
      {
        setPlant(searched);
      }

  }, []);

  if(plant != dummy)  //Der dummy verhindert "is possibly 'undefined'"
  {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PlantCardDetailed key={plant.ID} plant={plant} />
      </div>
    )
  }
}
  
