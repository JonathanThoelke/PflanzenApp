import AddToCart from "./AddToCart";

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

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-4 bg-white w-full">
      <img className="w-full object-cover h-48" src={plant.imagePath} alt={plant.deutscherName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{plant.deutscherName}</div>
        <p className="text-gray-700 text-base">{plant.lateinischerName}</p>
        <p className="text-gray-700 text-base">{plant.preis}</p>
      </div>
      <div className="px-6 pt-4 pb-4">
        <AddToCart />
      </div>
    </div>
  );
};

export default PlantCard;
