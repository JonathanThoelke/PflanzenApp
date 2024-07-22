"use client";

import React from "react";
import "./styles.css";

const Page = () => {
    const handleStart = () => {
        alert("Button clicked!"); //Startbutton
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
                <button className="start-button" onClick={handleStart}>
                    Jetzt starten
                </button>
            </div>
            <br></br>
            <p>
                Unsere 'o' mat besteht aus 5 Fragen.
                Nachdem Sie alle Fragen beantwortet haben, 
                werden wir Ihnen passende Pflanzen für Ihre
                Grünfläche vorschlagen.
            </p>
            <br></br>
            <a href="pflanzenapp/public/images/dahlien.png"></a>
        </div>
    );
};

export default Page;
