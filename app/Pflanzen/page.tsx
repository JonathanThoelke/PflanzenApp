//Hier sollen alle Pflanzen mit nur wenigen Informationen aufgelistet werden
export default function Plants()
{
    return (
        <main>
            <header>
                <a href="/">Homepage</a>
            </header>
            <h1>Pflanzen Homepage</h1>
            <ul>
                <li><a href="/Pflanzen/roteRose">rote Rose</a></li>
                <li><a href="/Pflanzen/taupeTulpe">taupe Tulpe</a></li>
                <li><a href="/Pflanzen/lilaLilie">lila Lilie</a></li>
            </ul>
            <footer>
                <a href="/Impressum">Impressum</a>
            </footer>
        </main>
    );
}