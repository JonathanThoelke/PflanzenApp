import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleSidebar}>×</button>
      <ul>
        <li>Zimmerpflanzen</li>
        <li>Gartenpflanzen</li>
        <li>Sukkulenten</li>
        <li>Wasserpflanzen</li>
        <li>Klimabäume</li>
        <li>Gartenbedarf</li>
      </ul>
    </div>
  );
};

export default Sidebar;
