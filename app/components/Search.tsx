
// components/SearchComponent.js
import { useState } from 'react';
import plantsData from "../../data/plants.json";

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
    beschreibung: string;
  }


const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Plant[]>();

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    
    const filteredResults = plantsData.filter(item =>
      item.deutscherName.toLowerCase().includes(query.toLowerCase()) || item.lateinischerName.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };
  
  if(results == undefined)
    {
        return (
            <div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                />
                <button type="submit">Search</button>
              </form>
            </div>
          );
    }
    else
    {
        return (
            <div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                />
                <button type="submit">Search</button>
              </form>
              <ul>
                {results.map((result, index) => (
                  <li key={index}>{result.deutscherName}</li>
                ))}
              </ul>
            </div>
          );
    }
};

export default SearchComponent;
