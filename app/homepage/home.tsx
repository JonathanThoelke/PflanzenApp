import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="p-4 flex-1">
        <button className="mb-4 text-white bg-black p-2" onClick={toggleSidebar}>
          Menü öffnen
        </button>
        <h1 className="text-3xl font-bold mb-4">Willkommen</h1>
        <p className="mb-4">
          Bei der Pflanzen-App bieten wir eine große Auswahl an Pflanzen, die
          perfekt für jedes Zuhause oder jeden Garten geeignet sind. Unsere App
          hilft Ihnen, neue Pflanzen zu entdecken und liefert detaillierte
          Pflegeanleitungen. Beginnen Sie mit der Erkundung und bringen Sie einen
          Hauch von Natur in Ihr Leben!
        </p>
      </div>
    </div>
  );
}

export default Home;
