'use client';
import { useRouter } from 'next/navigation'; // Für Navigation
import { useState } from 'react';
import plantsData from "../../data/plants.json";
import Button from './Button';

const Page = () => {
    const router = useRouter(); // Router-Instanz für Navigation

    const [water, setWater] = useState<string | null>(null);
    const [height, setHeight] = useState<string | null>(null);
    const [light, setLight] = useState<string | null>(null);
    const [bloom, setBloom] = useState<string | null>(null);
    const [pet, setPet] = useState<boolean | null>(null);

    const handleButton = (id:number, value:string | boolean | null) => {
        console.log(`assigning "${value}" to ${id}`)
        switch(id){
            case 0: setLight(value as string); break;
            case 1: setWater(value as string); break;
            case 2: setHeight(value as string); break;
            case 3: setBloom(value as string); break;
            case 4: setPet(value as boolean); break;
        }
        
        if(id < 4) {
            document.getElementById(`q${id}`)?.classList.remove('active');
            document.getElementById(`q${id+1}`)?.classList.add('active');
        } else {
            handleSubmit();
        }
    }

    // Funktion, die bei einem Button-Klick ausgeführt wird
    const handleSubmit = () => {
        let queryString = '/Pflanzen?';
        
        if (water != null) {
            queryString += `water=${water}&`;
        }
        if (height != null) {
            queryString += `h=${height}&`;
        }
        if (light != null) {
            queryString += `light=${light}&`;
        }
        if (bloom != null) {
            queryString += `blüte=${bloom}&`;
        }
        if (pet !== null) {
            queryString += `pet=${pet}&`;
        }
    
        const bloomMonths = {
            'Frühling': [3, 4, 5],
            'Sommer': [6, 7, 8],
            'Herbst': [9, 10, 11],
            'Winter': [12, 1, 2],
            'Keine Blüte': []
        };
        const lightAmount = {
            'vollsonnig': [4],
            'halbschattig': [2, 3],
            'schattig': [1]
        };
        const heightRange = {
            'niedrig': (height: number) => height < 30,
            'mittel': (height: number) => height >= 30 && height <= 60,
            'hoch': (height: number) => height > 60
        };
        const waterAmount = {
            'täglich': (water: number) => water > 1,
            'wöchentlich': (water: number) => water === 1,
            'seltener': (water: number) => water < 1
        };
    
        const examplePlants = plantsData.filter(plant =>
            (water ? waterAmount[water as keyof typeof waterAmount](plant.gießenProWoche) : true) &&
            (height ? heightRange[height as keyof typeof heightRange](plant.wuchshöhe) : true) &&
            (light ? lightAmount[light as keyof typeof lightAmount].includes(plant.lichtbedarf) : true) &&
            (bloom === 'Keine Blüte' ? plant.bluetezeit.length === 0 : bloom ? bloomMonths[bloom as keyof typeof bloomMonths].some(month => plant.bluetezeit.includes(month)) : true) &&
            (pet !== null ? plant.haustiergeeigent === pet : true)
        );
    
        if (examplePlants.length > 0) {
            router.push(queryString);
        } else {
            alert('Keine Pflanzen gefunden, die zu den Kriterien passen.');
        }
    };    
    
    return (
        <div className="p-4 text-center">
            <div id="matText">Beantworten Sie die folgenden 5 Fragen und lassen sich in wenigen Klicks durch unsere Vorschläge zur passenden Pflanze inspirieren.</div>
            <br></br>
            <div id="q0" className="frage-box active">
                <p className="fragenNr">Frage 1</p>
                <p className="frage">
                    Wie sonnig ist der Standort der Pflanze?
                </p>
                <div id="answers">
                <Button label={'vollsonnig'} onClick={()=> handleButton(0, 'vollsonnig')} />
                <Button label={'halbschattig'} onClick={()=> handleButton(0, 'halbschattig')} />
                <Button label={'schattig'}    onClick={()=> handleButton(0, 'schattig')} />
                </div>
                <br></br>
                    <p>
                        Sollsonnig: Ein Bereich ist sonnig, wenn von
                         etwa 11 Uhr bis 17 Uhr direktes Sonnenlicht darauf
                         fällt. Vollsonnige Bereiche erhalten den ganzen Tag 
                         über Sonne und eignen sich gut für Pflanze wie
                         Rosen, Lavendel und Sonnenblumen.
                         </p>
                         <br></br>
                         <p>
                            Halbschattig: Ein halbschattiger Bereich erhält etwa
                            4 Stunden direktes Sonnenlicht pro Tag, während
                            der Rest der Zeit im Schatten liegt. Morgensonne
                            wird von Halbschattenpflanzen bevorzugt, da die 
                            Luftfeutigkeit die Wärme abschwächt.
                         </p>
                         <br></br>
            </div>
            <div id="q1" className="frage-box">
                <p className="fragenNr">Frage 2</p>
                <p className="frage">
                    Wie oft können Sie die Pflanze gießen?
                </p>
                <div id="answers">
                <Button label={'täglich'} onClick={()  => handleButton(1, 'täglich')} />
                <Button label={'wöchentlich'} onClick={()  => handleButton(1, 'wöchentlich')} />
                <Button label={'seltener'} onClick={()  => handleButton(1, 'seltener')} />
                </div>
            </div>
            <div id="q2" className="frage-box">
                <p className="fragenNr">Frage 3</p>
                <p className="frage">
                    Wie hoch soll die Pflanze werden?
                </p>
                <div id="answers">
                <Button label={'niedrig'}        onClick={() => handleButton(2, 'niedrig')} />
                <Button label={'mittel'} onClick={() => handleButton(2, 'mittel')} />
                <Button label={'hoch'}     onClick={() => handleButton(2, 'hoch')} />
                </div>
            </div>
            <div id="q3" className="frage-box">
                <p className="fragenNr">Frage 4</p>
                <p className="frage">
                    Wann soll die Pflanze blühen?
                </p>
                <div id="answers">
                <Button label={'Frühling'} onClick={() => handleButton(3, 'Frühling')} />
                <Button label={'Sommer'} onClick={() => handleButton(3, 'Sommer')} />
                <Button label={'Herbst'} onClick={() => handleButton(3, 'Herbst')} />
                <Button label={'Winter'} onClick={() => handleButton(3, 'Winter')} />
                <Button label={'Keine Blüte'} onClick={() => handleButton(3, 'Keine Blüte')} />
                </div>
            </div>
            <div id="q4" className="frage-box">
                <p className="fragenNr">Frage 5</p>
                <p className="frage">
                    Soll die Pflanze haustiergeeignet sein?
                </p>
                <div id="answers">
                <Button label={'Ja'} onClick={() => handleButton(4, true)} />
                <Button label={'Egal'} onClick={() => handleButton(4, null)} />
                </div>
            </div>
            <br></br>
            <Button label="Ergebnisse anzeigen" onClick={handleSubmit} />
            <br></br>
        </div>
    );
}

export default Page;
