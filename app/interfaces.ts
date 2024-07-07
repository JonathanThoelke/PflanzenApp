// app/interfaces.ts
export interface Plant {
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
  