import React, { useState } from 'react';
import '../styles/ContactList.css'; // Importa los estilos CSS para el componente

import Leonardo from '../assets/leonardo.jpeg' // Importa la imagen para el avatar de Leonardo
import marin from '../assets/marin.jpeg' // Importa la imagen para el avatar de Martin
import pedro from '../assets/pedro.jpeg' // Importa la imagen para el avatar de Pedro

// Define una lista de contactos con sus propiedades: id, name, lastMessage, time, avatarUrl
const contacts = [
  { id: 1, name: 'Leonardo Dominguez', lastMessage: 'he amigo como estas?', time: '3:00 PM', avatarUrl: Leonardo },
  { id: 2, name: 'Martin Leguizamon', lastMessage: 'este finde sale joda? jaja', time: '2:30 PM', avatarUrl: marin },
  { id: 3, name: 'Pedro Martinez', lastMessage: 'jaja no podesss', time: '1:45 PM', avatarUrl: pedro },
];

// Define el componente funcional ContactList
function ContactList({ onSelectContact }) {
  // useState se usa para manejar el estado del término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los contactos según el término de búsqueda. Solo muestra contactos cuyo nombre incluye el término de búsqueda
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Renderiza la interfaz de usuario del componente
  return (
    <div className="contact-list">
      {/* Input de búsqueda para filtrar contactos */}
      <input
        type="text"
        placeholder="Buscar Contactos.." // Texto que aparece en el campo de búsqueda cuando está vacío
        value={searchTerm} // Valor del campo de búsqueda, enlazado con el estado
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado cuando el usuario escribe en el campo
        className="contact-search" // Clase CSS para estilizar el campo de búsqueda
      />

      {/* Condicional para mostrar contactos filtrados o un mensaje si no se encuentra ninguno */}
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          // Mapea y renderiza cada contacto filtrado en un div
          <div
            key={contact.id} // Clave única para cada contacto
            className="contact-item" // Clase CSS para el elemento de contacto
            onClick={() => onSelectContact(contact)} // Llama a la función onSelectContact cuando se hace clic en un contacto
          >
            {/* Muestra la imagen del avatar del contacto */}
            <img
              src={contact.avatarUrl} // URL del avatar del contacto
              alt={`${contact.name}'s avatar`} // Texto alternativo para la imagen
              className="contact-avatar" // Clase CSS para estilizar el avatar
            />
            <div className="contact-info">
              {/* Muestra el nombre del contacto */}
              <div className="contact-name">{contact.name}</div>
              <div className="contact-message">
                {/* Muestra el último mensaje del contacto */}
                <span className="message-text">{contact.lastMessage}</span>
                {/* <span className="message-time">{contact.time}</span> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        // Si no se encuentran contactos, muestra un mensaje
        <div className="no-contacts">No se encuentran contactos</div>
      )}
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default ContactList;
