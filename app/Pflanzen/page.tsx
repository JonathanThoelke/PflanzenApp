//Hier sollen alle Pflanzen mit nur wenigen Informationen und Links zu "Details-Seiten" aufgelistet werden.
//Potentiell mit einer Filterfunktion? (könnte auch mit der Suchfunktion gemerged werden)
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FetchDataById } from "../_lib/logic";


export default function Plants()
{
    //Hier sollte ein API-call Pflanzen aus dem Dataset auflisten mit minimalen Informationen (Name, Typ, Preis, etc.)
    return (
        <div>
            <h1>Hier werden alle Pflanzen aufgelistet</h1>
            <ul>
                <li><Link href="/Pflanzen/1"><FetchDataById id={1}></FetchDataById></Link></li>
                <li><Link href="/Pflanzen/2"><FetchDataById id={2}></FetchDataById></Link></li>
                <li><Link href="/Pflanzen/3"><FetchDataById id={3}></FetchDataById></Link></li>
            </ul>
        </div>
    );
}