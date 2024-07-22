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
                    Frage 2
                </button>
                <p>
                   Möchten Sie eine Pflanze, die große
                   auffällige Blüten ausbildet?
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
                    <a href="pflanzenapp/public/images/dahlien.png"></a>
                    </div>
                    </div>
            
        
         );
        };
        
        export default Page;
