// PlantCard.tsx

interface Plant {
    id: number;
    name: string;
    image: string;
    price: number;
  }  
  
  interface PlantCardProps {
    plant: Plant;
  }
  
  const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={plant.image} alt={plant.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{plant.name}</div>
          <p className="text-gray-700 text-base">€{plant.price.toFixed(2)}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Zum Warenkorb hinzufügen
          </button>
        </div>
      </div>
    );
  };
  
  export default PlantCard;
  