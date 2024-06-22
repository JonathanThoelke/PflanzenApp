

export default function Home({ params }: {
    params: { plantID: string}
}) {
    return (
      <main>
        <header>Ich bin ein Header</header>
        <nav></nav>
        <h1>Pflanzen-App</h1>
        <p>Test</p>
        <aside></aside>
        <footer>Ich bin ein Footer</footer>
      </main>
    );
  }
  