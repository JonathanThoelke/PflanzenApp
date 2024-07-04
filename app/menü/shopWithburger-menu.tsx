import { SetStateAction, useEffect, useState } from 'react';
import plantsData from '../../data/plants.json';
import PlantCard from '../components/PlantCard';
import BurgerMenu from './burgermenu.tsx';

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

export default function Shop() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const categories = [
    'Zimmerpflanzen (2)',
    'Gartenpflanzen (2)',
    'Sukkulenten (1)',
    'Wasserpflanzen (0)',
    'Klimabäume (1)',
    'Gartenbedarf (0)',
  ];

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  const filteredPlants = selectedCategory
    ? plants.filter((plant) => plant.gattung === selectedCategory)
    : plants;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Hier ist der Shop</h1>
      <button onClick={() => setShowMenu(!showMenu)} className="burger-menu">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {showMenu && (
        <BurgerMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(category: SetStateAction<string>) => {
            setSelectedCategory(category);
            setShowMenu(false);
          }}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredPlants.map((plant) => (
          <div key={plant.ID} className="flex justify-center">
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
    </div>
  );
}
