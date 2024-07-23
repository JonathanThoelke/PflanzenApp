'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Für Navigation
import Button from './Button';

const Page = () => {
    const router = useRouter(); // Router-Instanz für Navigation

    const [loc, setLoc] = useState<string | null>(null);
    const [height, setHeight] = useState<string | null>(null);
    const [bloom, setBloom] = useState<string | null>(null);
    const [light, setLight] = useState<string | null>(null);

    const handleButton = (id:number, value:string | null) => {
        console.log(`assigning "${value}" to ${id}`)
        switch(id){
            case 0: setLoc(value); break;
            case 1: setHeight(value); break;
            case 2: setLight(value); break;
            case 3: setBloom(value); break;
        }
    }

    // Funktion, die bei einem Button-Klick ausgeführt wird
    const handleSubmit = () => {
        let queryString = '/Pflanzen?exc=true&';
        
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
            queryString += `bloom=${bloom}&`
        }
        router.push(queryString);
    };
    
    return (
        <div className="p-4 text-center">
            {/* Rendering der Fragen-Komponenten */}
            <div className="frage-box">
                <h3>Frage 1</h3>
                <p>
                    Wollen sie eine Pflanze für drinnen oder draußen?
                </p>
                <Button label={'drinnen'} onClick={()=> handleButton(0, 'Zimmerpflanze')} />
                <Button label={'draußen'} onClick={()=> handleButton(0, 'Gartenpflanze')} />
                <Button label={'egal'}    onClick={()=> handleButton(0, null)} />
            </div>
            <div className="frage-box">
                <h3>Frage 2</h3>
                <p>
                    Wie groß darf die Pflanze werden?
                </p>
                <Button label={'<30cm'} onClick={()  => handleButton(1, '30')} />
                <Button label={'<50cm'} onClick={()  => handleButton(1, '50')} />
                <Button label={'<70cm'} onClick={()  => handleButton(1, '70')} />
                <Button label={'<90cm'} onClick={()  => handleButton(1, '90')} />
                <Button label={'<110cm'} onClick={() => handleButton(1, '110')} />
            </div>
            <div className="frage-box">
                <h3>Frage 3</h3>
                <p>
                    Wie viel Licht kann die Pflanze bekommen?
                </p>
                <Button label={'viel'}        onClick={() => handleButton(2, '3')} />
                <Button label={'mittelmäßig'} onClick={() => handleButton(2, '2')} />
                <Button label={'wenig'}       onClick={() => handleButton(2, '1')} />
            </div>
            <div className="frage-box">
                <h3>Frage 4</h3>
                <p>
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
            <Button label="Klick mich" onClick={handleSubmit} />
        </div>
    );
}

export default Page;
