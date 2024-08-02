
import React from 'react';
import '../styles/DefaultPage.css'; 

import whatsapp from '../assets/whastapp.jpeg'

function DefaultPage() {
  return (
    <div className="default-page">
      <div className="default-page-content">
        <h1>Bienvenido a WhatsApp</h1>
        <p>Nos da mucho gusto que nos eligieras como medio de comunucacion preferido</p>
        <img src={whatsapp} alt="WhatsApp Logo" className="logo" />
        <p>Disfruta nuestros servicios que proveemos para usted!</p>
      </div>
    </div>
  );
}

export default DefaultPage;
