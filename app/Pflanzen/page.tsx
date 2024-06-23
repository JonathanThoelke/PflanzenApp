"use client"
//Hier sollen alle Pflanzen mit nur wenigen Informationen und Links zu "Details-Seiten" aufgelistet werden.
//Potentiell mit einer Filterfunktion? (könnte auch mit der Suchfunktion gemerged werden)
import Link from "next/link";
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

export default function Plants()
{
    //Hier sollte ein API-call Pflanzen aus dem Dataset auflisten mit minimalen Informationen (Name, Typ, Preis, etc.)
    return (
        <div>
            <h1>Hier werden alle Pflanzen aufgelistet</h1>
            <ul>
                <li><Link href="/Pflanzen/roteRose">rote Rose</Link></li>
                <li><Link href="/Pflanzen/taupeTulpe">taupe Tulpe</Link></li>
                <li><Link href="/Pflanzen/lilaLilie">lila Lilie</Link></li>
            </ul>
        </div>
    );
}