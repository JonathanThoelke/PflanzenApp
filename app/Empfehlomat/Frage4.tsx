"use client";

import "./Button";

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
                   Wann soll die Pflanze blühen?
                </p>
                <div className="button-container">
                    <button className="button" onClick={() => handleStart()}>
                        Frühling
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        Sommer
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        Herbst
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        Winter
                    </button>
                    <br></br>
                    <a href="pflanzenapp/public/images/basilikum.png"></a>
                    </div>
                    </div>
            
        
         );
        };
        
        export default Page;
