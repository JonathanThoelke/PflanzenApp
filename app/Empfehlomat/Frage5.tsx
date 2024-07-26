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
                    Frage 5
                </button>
                <p>
                    Soll die Pflanze haustiergeeignet sein?
                </p>
                <div className="button-container">
                    <button className="button" onClick={() => handleStart()}>
                        Ja
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        Egal
                    </button>
                    <br></br>
                    <a href="pflanzenapp/public/images/rose.jpg"></a>
                        </div>
                    </div>
            
        
         );
        };
        
        export default Page;
