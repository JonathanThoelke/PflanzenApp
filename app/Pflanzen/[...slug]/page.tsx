import { notFound } from "next/navigation";
import { FetchDataById } from "@/app/_lib/logic";

//Hier soll Anhand der Parameter in der URL eine Pflanze aus dem Datensatz rausgesucht werden
//und sämtliche verfügbaren Informationen dargestellt werden
export default function Plant({ params }: {
    params: {
        slug: string[];
    }
}) {
    if(<FetchDataById id={parseInt(params.slug[0])}></FetchDataById> != null){ //Vorrübergehend zum Testen von notFound()
      return (
        <div>
          <h1>Hier siehst du: <FetchDataById id={ parseInt(params.slug[0]) }></FetchDataById></h1>
        </div>
      );  //In Zukunft sollen mittels useState, anhand der parameter, Daten aus dem Datensatz gezogen
          //werden. Nicht-existierende Daten-Objekte sollen nach not-found umgeleitet werden.
    }
    else{
      notFound();
    }
  }
  