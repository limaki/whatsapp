import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Chats</h2>
      </div>
      <nav>
        <ul>
          {/* <li><Link to="/chat">Home</Link></li> */}
          <li><Link to="/default">Inicio</Link></li>
          <li><Link to="/profile">Perfil</Link></li>
          <li><Link to="/">Chat</Link></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
