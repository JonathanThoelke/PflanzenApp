//Hier soll Anhand der Parameter in der URL eine Pflanze aus dem Datensatz rausgesucht
//und sämtliche verfügbaren Informationen dargestellt werden
export default function Plant({ params }: {
    params: {
        slug: string[];
    }
}) {
    return (
      <main>
        <header>
          <a href="/">Homepage</a>
        </header>
        <h1>{ params.slug[0] }</h1>
        <footer>
          <a href="/Impressum">Impressum</a>
        </footer>
      </main>
    );
  }
  