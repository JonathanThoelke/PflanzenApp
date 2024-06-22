//Hier soll Anhand der Parameter in der URL eine Pflanze aus dem Datensatz rausgesucht

import { notFound } from "next/navigation";

//und sämtliche verfügbaren Informationen dargestellt werden
export default function Plant({ params }: {
    params: {
        slug: string[];
    }
}) {
    if(params.slug.length === 1){ //Vorrübergehend zum Testen von notFound()
      return (
        <div>
          <h1>Hier siehst du: { params.slug[0] }</h1>
        </div>
      );
    }
    else{
      notFound();
    }
  }
  