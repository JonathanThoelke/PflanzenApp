"use client"
//Hier soll Anhand der Parameter in der URL eine Pflanze aus dem Datensatz rausgesucht werden

import { notFound } from "next/navigation";

import React, { useState, useEffect } from "react";

const data = [
    { id: 1, name: 'rote Rosen' },
    { id: 2, name: 'taupe Tulpen' },
    { id: 3, name: 'lila Lilien' }
];
type DataType = {
    id: number;
    name: string;
};
type Props = {
    id: number;
  };

  const FetchDataById: React.FC<Props> = ({ id }) => {
    const [name, setName] = useState<string | null>(null);
  
    useEffect(() => {
      // Function to fetch data by ID
      const fetchDataById = (id: number) => {
        const foundData = data.find((item) => item.id === id);
        if (foundData) {
          setName(foundData.name);
        } else {
          setName(null);
        }
      };
  
      // Call the fetch function with the provided ID
      fetchDataById(id);
    }, [id]);
  
    return (
      <div>
        {name ? <p>Name: {name}</p> : <p>Data not found</p>}
      </div>
    );
  };

//<FetchDataById id={1}></FetchDataById>


//und sämtliche verfügbaren Informationen dargestellt werden
export default function Plant({ params }: {
    params: {
        slug: string[];
    }
}) {
    if(params.slug.length === 1){ //Vorrübergehend zum Testen von notFound()
      return (
        <div>
          <h1>Hier siehst du: <FetchDataById id={ parseInt(params.slug[0]) }></FetchDataById></h1>
        </div>
      );  //In Zukunft sollen mittels useState, anhand der parameter, Daten aus dem Datensatz gezogen
          //werden. Nicht-existierende Daten-Objekte sollen nach not-found umgeleitet werden.
    }
    else{
      notFound();
    }
  }
  