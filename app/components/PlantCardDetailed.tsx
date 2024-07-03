import Link from "next/link";


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

interface PlantCardProps {
  plant: Plant;
}

const PlantCardDetailed: React.FC<PlantCardProps> = ({ plant }) => {
  const details = "/Pflanzen/" + plant.ID;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <Link href={ details }>
        <img className="w-full object-cover h-48" src={plant.imagePath} alt={plant.deutscherName} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{plant.deutscherName}</div>
          <p className="text-gray-700 text-base">{plant.lateinischerName}</p>
          <p className="text-gray-700 text-base">{plant.beschreibung}</p>
        </div>
      </Link>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
  );
};

export default PlantCardDetailed;
