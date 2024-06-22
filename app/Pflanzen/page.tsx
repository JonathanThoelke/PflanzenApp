import Link from "next/link";

//Hier sollen alle Pflanzen mit nur wenigen Informationen aufgelistet werden
export default function Plants()
{
    return (
        <div>
            <h1>Hier werden alle Pflanzen aufgelistet</h1>
            <ul>
                <li><Link href="/Pflanzen/roteRose">rote Rose</Link></li>
                <li><Link href="/Pflanzen/taupeTulpe">taupe Tulpe</Link></li>
                <li><Link href="/Pflanzen/lilaLilie">lila Lilie</Link></li>
            </ul>
        </div>
    );
}