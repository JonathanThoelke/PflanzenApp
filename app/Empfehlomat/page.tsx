'use client';
import { useRouter } from 'next/navigation'; // Für Navigation
import { useState } from 'react';
import plantsData from "../../data/plants.json";
import Button from './Button';

const Page = () => {
    const router = useRouter(); // Router-Instanz für Navigation

    const [loc, setLoc] = useState<string | null>(null);
    const [height, setHeight] = useState<string | null>(null);
    const [light, setLight] = useState<string | null>(null);
    const [bloom, setBloom] = useState<string | null>(null);

    const handleButton = (id:number, value:string | null) => {
        console.log(`assigning "${value}" to ${id}`)
        switch(id){
            case 0: setLoc(value); break;
            case 1: setHeight(value); break;
            case 2: setLight(value); break;
            case 3: setBloom(value); break;
        }
        
        if(id < 4) {
            document.getElementById(`q${id}`)?.classList.remove('active');
            document.getElementById(`q${id+1}`)?.classList.add('active');
        }
    }

    // Funktion, die bei einem Button-Klick ausgeführt wird
    const handleSubmit = () => {
        let queryString = '/Pflanzen?';
        
        if(loc != null)
        {
            console.log(loc)
            queryString += `cat=${loc}&`
        }
        if(height != null)
        {
            queryString += `h=${height}&`
        }
        if(light != null)
        {
            queryString += `light=${light}&`
        }
        if(bloom != null)
        {
            queryString += `blüte=${bloom}&`
        }
        const examplePlants = plantsData.filter(plant => 
            (loc ? plant.kategorien.includes(loc) : true) &&
            (height ? plant.wuchshöhe <= parseInt(height) : true) &&
            (light ? plant.lichtbedarf === parseInt(light) : true) &&
            (bloom ? plant.bluetezeit.includes(parseInt(bloom)) : true)
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
                    Wollen sie eine Pflanze für drinnen oder draußen?
                </p>
                <Button label={'drinnen'} onClick={()=> handleButton(0, 'Zimmerpflanze')} />
                <Button label={'draußen'} onClick={()=> handleButton(0, 'Gartenpflanze')} />
                <Button label={'egal'}    onClick={()=> handleButton(0, null)} />
            </div>
            <div id="q1" className="frage-box">
                <p className="fragenNr">Frage 2</p>
                <p className="frage">
                    Welche Höhe darf Ihre Pflanze erreichen?
                </p>
                <Button label={'bis 30cm'} onClick={()  => handleButton(1, '30')} />
                <Button label={'bis 50cm'} onClick={()  => handleButton(1, '50')} />
                <Button label={'bis 70cm'} onClick={()  => handleButton(1, '70')} />
                <Button label={'bis 90cm'} onClick={()  => handleButton(1, '90')} />
                <Button label={'bis 110cm'} onClick={() => handleButton(1, '110')} />
            </div>
            <div id="q2" className="frage-box">
                <p className="fragenNr">Frage 3</p>
                <p className="frage">
                    Welchen Standort haben sie zur Verfügung?
                </p>
                <Button label={'Sonne'}        onClick={() => handleButton(2, '3')} />
                <Button label={'Halbschatten'} onClick={() => handleButton(2, '2')} />
                <Button label={'Schatten'}     onClick={() => handleButton(2, '1')} />
                <Button label={'weiß nicht'}   onClick={() => handleButton(2, null)}/>
                <p>
                    Sonnig (vollsonnig): Ein Bereich ist sonnig, wenn von etwa 11
                    Uhr bis 17 Uhr direktes Sonnenlicht darauf fällt. Vollsonnige
                    Bereiche erhalten den ganzen Tag über Sonne und eignen sich gut
                    für Pflanzen wie Rosen, Lavendel und Sonnenblumen.
                </p>
                <p>
                    Halbschatten: Ein halbschattiger Bereich erhält etwa 4 Stunden
                    direktes Sonnenlicht pro Tag, während der Rest der Zeit im Schatten
                    liegt. Morgensonne wird von Halbschattenpflanzen bevorzugt, da die
                    Luftfeuchtigkeit die Wärme abschwächt.
                </p>
            </div>
            <div id="q3" className="frage-box">
                <p className="fragenNr">Frage 4</p>
                <p className="frage">
                    Zu welcher Jahreszeit soll die Pflanze blühen?
                </p>
                <Button label={'Frühling'} onClick={() => handleButton(3, '4')} />
                <Button label={'Sommer'} onClick={() => handleButton(3, '7')} />
                <Button label={'Herbst'} onClick={() => handleButton(3, '10')} />
            </div>
            <br></br>
            {/*<Frage1 />
            <Frage2 />
            <Frage3 />
            <Frage4 />
            <Frage5 />*/}
            
            {/* Button zum Auslösen der Navigation */}
            <Button label="Ergebnisse anzeigen" onClick={handleSubmit} />
            <br></br>
            {/*<img className="w-full object-cover h-48" src={plantsData.find((item) => item.ID === (Math.floor(Math.random()*(plantsData.length))+1))?.imagePath} />*/}
        </div>
    );
}

export default Page;
