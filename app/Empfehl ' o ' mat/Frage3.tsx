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
                    Frage 3
                </button>
                <p>
                   Welche Höhe darf Ihre Pflanze erreichen?
                </p>
                <div className="button-container">
                    <button className="button" onClick={() => handleStart()}>
                        bis 20cm
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        60-100cm
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
