//Logik für Dataset-Abrufe - Kann von anderen Skripten importiert werden
//Zukünftig wird Data aus JSON-Datei ausgelesen statt als const deklariert
"use client"
import React, { useState, useEffect } from "react";

const data = [
    { id: 1, name: 'rote Rosen', description: 'rot' },
    { id: 2, name: 'taupe Tulpen', description: 'braun' },
    { id: 3, name: 'lila Lilien', description: 'violet' },
    { id: 4, name: 'hellblaue Hortensien', description: 'blau' },
];

type DataType = {
    id: number;
    name: string;
    description: string;
};
type Props = {
  id: number;
};

export const FetchDataById: React.FunctionComponent<Props> = ({ id }) => {
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
    <>
      {name ? <p>Name: {name}</p> : null}
    </>
  );
};

//<FetchDataById id={1}></FetchDataById>
