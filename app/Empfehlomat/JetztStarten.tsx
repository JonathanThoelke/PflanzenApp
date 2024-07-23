"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from './Button';

const JetztStarten = () => {
    const router = useRouter();
    const handleStart = () => {
        router.push('/Empfehlomat')
    };

    return (
        <div>
            <p>
                Für alle, die eine Empfehlung oder ein paar Ideen/Anregungen für Ihren Garten brauchen!
                Testen Sie es aus.
            </p>
            <br />
            <div className="empfehl-o-mat">
                <p style={{ fontWeight: "bold", fontSize: "28px" }}>
                    Empfehl 'o' mat
                </p>
                <br />
                <Button label={"Jetzt starten"} onClick={handleStart} />
            </div>
            <br></br>
            <p>
                Unser 'o' mat besteht aus 4 Fragen.
                Nachdem Sie alle Fragen beantwortet haben, 
                werden wir Ihnen passende Pflanzen für Ihre
                Grünfläche vorschlagen.
            </p>
            <br></br>
        </div>
    );
};

export default JetztStarten;
