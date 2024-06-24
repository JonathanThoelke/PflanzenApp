//Homepage

export default function Home() {
  return (
    // p-4 fügt ein padding von 4 Tailwind Einheiten hinzu
    // mb-4  fügt ein margin padding hinzu
    <div className="p-4"> 
      <h1 className="text-3xl font-bold mb-4">Willkommen</h1>
      <p className="mb-4">
        Bei der Pflanzen-App bieten wir eine große Auswahl an Pflanzen, die
        perfekt für jedes Zuhause oder jeden Garten geeignet sind. Unsere App
        hilft Ihnen, neue Pflanzen zu entdecken und liefert detaillierte
        Pflegeanleitungen. Beginnen Sie mit der Erkundung und bringen Sie einen
        Hauch von Natur in Ihr Leben!        
      </p>
    </div>
  );
}
