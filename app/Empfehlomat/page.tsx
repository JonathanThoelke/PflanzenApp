'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Für Navigation
import { useSearchParams } from 'next/navigation'; // Für Abfrageparameter
import Frage1 from './Frage1';
import Frage2 from './Frage2';
import Frage3 from './Frage3';
import Frage4 from './Frage4';
import Frage5 from './Frage5';
import Button from './Button';

const Page = () => {
    const router = useRouter(); // Router-Instanz für Navigation
    const searchParams = useSearchParams(); // Abfrageparameter aus der URL abrufen
    
    const [inputValue, setInputValue] = useState(''); // Zustand für Eingabewert

    // Funktion, die bei einem Button-Klick ausgeführt wird
    const handleClick = () => {
        // Validierung des Eingabewerts
        if (inputValue.trim() === '') {
            alert('Bitte geben Sie einen Wert ein');
            return;
        }

        // Navigation zur neuen URL mit inputValue als Abfrageparameter
        router.push(`/Pflanzen?name=${encodeURIComponent(inputValue)}`);
    };

    // Abfrageparameter aus searchParams extrahieren
    let exclusive = !!searchParams.get('exc') || false;
    let nameDE = searchParams.get('name');
    let nameLT = searchParams.get('nameL');
    let desc = searchParams.get('desc');
    let category = searchParams.get('cat');
    let height = searchParams.get('h');
    let light = searchParams.get('light');
    let pet = searchParams.get('pet');
    let bloom = searchParams.get('bloom');
    
    return (
        <div className="p-4">
            {/* Rendering der Fragen-Komponenten */}
            <Frage1 />
            <Frage2 />
            <Frage3 />
            <Frage4 />
            <Frage5 />
            
            {/* Eingabefeld zum Aktualisieren des inputValue */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Geben Sie einen Namen ein"
            />
            
            {/* Button zum Auslösen der Navigation */}
            <Button label="Klick mich" onClick={handleClick} />
        </div>
    );
}

export default Page;
