import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <button className="menu-button" onClick={toggleSidebar}>
        {sidebarOpen ? 'Menü schließen' : 'Menü öffnen'}
      </button>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
