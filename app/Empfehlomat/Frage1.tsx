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
                    Frage 1
                </button>
                <p>
                    Wie sonnig ist der Standort der Pflanze?
                </p>
                <div className="button-container">
                    <button className="button" onClick={() => handleStart()}>
                        vollsonnig
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        halbschattig
                    </button>
                    <button className="button" onClick={() => handleStart()}>
                        schattig
                    </button>
                    <br></br>
                    <p>
                        Sollsonnig: Ein Bereich ist sonnig, wenn von
                         etwa 11 Uhr bis 17 Uhr direktes Sonnenlicht darauf
                         fällt. Vollsonnige Bereiche erhalten den ganzen Tag 
                         über Sonne und eignen sich gut für Pflanze wie
                         Rosen, Lavendel und Sonnenblumen.
                         </p>
                         <br></br>
                         <p>
                            Halbschattig: Ein halbschattiger Bereich erhält etwa
                            4 Stunden direktes Sonnenlicht pro Tag, während
                            der Rest der Zeit im Schatten liegt. Morgensonne
                            wird von Halbschattenpflanzen bevorzugt, da die 
                            Luftfeutigkeit die Wärme abschwächt.
                         </p>
                         <br></br>
                         <a href="pflanzenapp/public/images/sonnenhut.png"></a>
            </div>
            </div>
            
        
         );
        };
        
        export default Page;
