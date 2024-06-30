"use client"

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import PlantCardDetailed from "@/app/components/PlantCardDetailed";
import plantsData from "../../../data/plants.json";

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

export default function Plant({ params }: {
  params: {
    slug: string[];
  }
}) {
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    // Simuliere das Laden der Daten (hier aus einer JSON-Datei)
    setPlant(plantsData.find((item) => item.ID === parseInt(params.slug[0])));
  }, []);

  if(plant != null)
  {
    return (
      <PlantCardDetailed key={plant.ID} plant={plant} />
    )
  }
  else 
  {
    return notFound
  }
}
  