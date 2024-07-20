
import { Plant as PlantType } from "../interfaces";

interface PlantCardProps {
    plant: PlantType;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
const details = "/Pflanzen/" + plant.ID;
    return (
        <div className="rounded overflow-hidden shadow-lg m-4 bg-white w-full">
            <img className="w-full object-cover h-48" src={plant.imagePath} alt={plant.deutscherName} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{plant.deutscherName}</div>
                <p className="text-gray-700 text-base">{plant.lateinischerName}</p>
                <p className="text-gray-700 text-base">{plant.preis}</p>
            </div>
        </div>
    );
};

export default PlantCard;

