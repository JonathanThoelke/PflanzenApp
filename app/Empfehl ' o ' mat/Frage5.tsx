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
                    Frage 5
                </button>
                <p>
                   Darf Ihre Pflanze einen starken Duft 
                   verströmen?
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
                        Es gibt tolle duftende Blume oder Kräuter.
                        Zum Beispiel: Rosen, Colorkraut, Zironenverbene 
                        oder Basilikum.
                    </p>
                    <br></br>
                    <a href="pflanzenapp/public/images/rose.jpg"></a>
                        </div>
                    </div>
            
        
         );
        };
        
        export default Page;
