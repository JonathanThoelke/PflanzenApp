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
                    Frage 2
                </button>
                <p>
                   Wie oft können Sie die Pflanze gießen?
                </p>
                <div className="button-container">
                    <button className="button" onClick={() => handleStart()}>
                        täglich
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        wöchentlich
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        seltener
                    </button>
                    <br></br>
                    <a href="pflanzenapp/public/images/dahlien.png"></a>
                    </div>
                    </div>
            
        
         );
        };
        
        export default Page;
