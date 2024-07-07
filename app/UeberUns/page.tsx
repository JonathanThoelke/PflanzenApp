"use client";

// Über uns Seite

const Page = () => {
  return (
    <div>
      <div className="parentwelcome">
        <div
          style={{ gridArea: "above", backgroundColor: "black", opacity: 0.6 }}
        ></div>
        <div className="ueberunswillkommen">
          <p style={{ fontWeight: "bold", fontSize: "28px" }}>
            Willkommen in unserer Gartenapp!
          </p>
          <br></br>
          <p style={{ fontWeight: 600, textAlign: "center", fontSize: "20px" }}>
            Wir freuen uns, dass Sie den Weg zu uns gefunden haben und möchten
            Ihnen einen kleinen Eindruck in unser Unternehmen geben.
          </p>
        </div>
        <div
          style={{ gridArea: "under", backgroundColor: "black", opacity: 0.6 }}
        ></div>
      </div>
      <div className="p-4">
      <h2 style={{fontWeight: "bold", fontSize: "23px" }}>
        Unsere Geschichte
      </h2>
      <p>
        Gartenapp wurde im Jahr 2024 gegründet und hat sich seitdem zu einem der
        führenden Gartenshops in der Region entwickelt. Mit einer Leidenschaft
        für Gärten und Pflanzen begann unsere Reise in einem kleinen Laden und
        hat sich zu einem großen Unternehmen mit einer breiten Palette an
        Gartenprodukten entwickelt. Unsere Liebe zur Natur und unser Engagement
        für Qualität treiben uns jeden Tag an, das Beste für unsere Kunden zu
        bieten.
      </p>
      <h2 style={{fontWeight: "bold", fontSize: "23px" }}>
        Unser Sortiment
      </h2>
      <p>
        Bei uns finden Sie alles, was Ihr Gärtnerherz begehrt. Von einer großen
        Auswahl an Pflanzen bis hin zu hochwertigen Gartengeräten - wir bieten
        Ihnen eine vielfältige Produktpalette. Unser Ziel ist es, Ihren Garten
        in eine grüne Oase der Ruhe und Schönheit zu verwandeln.
      </p>
      <h2 style={{fontWeight: "bold", fontSize: "23px" }}>
        Unser Service
      </h2>
      <p>
        Unser erfahrenes und freundliches Team steht Ihnen mit Rat und Tat zur
        Seite. Ob Sie Tipps für die Pflanzenpflege benötigen, Unterstützung bei
        der Gartenplanung wünschen oder Fragen zu unseren Produkten haben - wir
        sind immer für Sie da. Wir legen großen Wert auf persönlichen Service
        und Kundenzufriedenheit.
      </p>
      <h2 style={{fontWeight: "bold", fontSize: "23px" }}>
        Nachhaltigkeit
      </h2>
      <p>
        Nachhaltigkeit liegt uns besonders am Herzen. Wir setzen auf
        umweltfreundliche Produkte und nachhaltige Praktiken, um unseren Beitrag
        zum Schutz der Umwelt zu leisten. Von biologischen Pflanzenschutzmitteln
        bis hin zu recycelbaren Verpackungen - wir bemühen uns, unseren
        ökologischen Fußabdruck so klein wie möglich zu halten.
      </p>
      <h2 style={{fontWeight: "bold", fontSize: "23px" }}>
        Unsere Vision
      </h2>
      <p>
        Wir glauben daran, dass ein schöner Garten nicht nur die Lebensqualität
        verbessert, sondern auch einen positiven Einfluss auf die Umwelt hat.
        Unsere Vision ist es, möglichst vielen Menschen die Freude am Gärtnern
        näherzubringen und dabei nachhaltig und umweltbewusst zu handeln.
      </p>
      <p>
        Besuchen Sie uns in unserem Shop und lassen Sie sich von unserer
        Leidenschaft für Gärten anstecken. Wir freuen uns darauf, Sie bei Ihrem
        nächsten Gartenprojekt zu unterstützen!
      </p>
      <p>Ihr Gartenapp-Team</p>
      </div>
    </div>
  );
};

export default Page;
