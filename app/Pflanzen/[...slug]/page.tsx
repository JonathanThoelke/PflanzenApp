//Hier soll Anhand der Parameter in der URL eine Pflanze aus dem Datensatz rausgesucht
//und sämtliche verfügbaren Informationen dargestellt werden
export default function Plant({ params }: {
    params: {
        slug: string[];
    }
}) {
    return (
      <div>
        <h1>Hier siehst du: { params.slug[0] }</h1>
      </div>
    );
  }
  