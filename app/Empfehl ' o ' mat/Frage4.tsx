"use client";

import React from "react";
import "./styles.css";

const Page = () => {
    const handleStart = () => {
        alert("Button clicked!"); 
    };

    return (
        <div>
            <p>
                Beantworten Sie die folgenden 5 Fragen und
                lassen Sie sich in wenigen Klicks durch unsere
                Vorschläge zu passenden Pflanzen inspirieren.
            </p>
            <br></br>
            <button className="button" onClick={handleStart}>
                    Frage 4
                </button>
                <p>
                   Bevorzugen Sie Pflanzen, die Insekten 
                   Nahrung bieten können?
                </p>
                <div className="button-container">
                    <button className="button" onClick={() => handleStart()}>
                        ja
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        nein
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        Nicht relevant
                    </button>
                    <br></br>
                    <p>
                        Besonders Blüten, die speziell darauf gezüchtet 
                        wurden gefüllte Blüten zu bilden, können Insekten
                        oft keine Nahrung zur Verfügung stellen.
                    </p>
                    <a href="pflanzenapp/public/images/basilikum.png"></a>
                    </div>
                    </div>
            
        
         );
        };
        
        export default Page;
