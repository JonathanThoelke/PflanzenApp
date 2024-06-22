//Hier soll Anhand der Parameter in der URL eine Pflanze aus dem Datensatz rausgesucht
//und sämtliche verfügbaren Informationen dargestellt werden
export default function Plant({ params }: {
    params: {
        slug: string[];
    }
}) {
    return (
      <main>
        <header>Ich bin ein Header</header>
        <h1>{ params.slug[0] }</h1>
        <footer>Ich bin ein Footer</footer>
      </main>
    );
  }
  