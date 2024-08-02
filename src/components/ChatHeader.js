import React from 'react'; // Importa React para poder crear componentes
import '../styles/ChatHeader.css'; // Importa los estilos CSS específicos para el componente

// Define el componente funcional ChatHeader
function ChatHeader({ contact }) {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        {/* Muestra el avatar del contacto */}
        <img
          src={contact.avatarUrl} // URL de la imagen del avatar
          alt={`${contact.name}'s avatar`} // Texto alternativo para la imagen, útil para accesibilidad
          className="chat-avatar" // Clase CSS para estilizar la imagen del avatar
        />
        <div className="chat-header-info">
          {/* Muestra el nombre del contacto */}
          <h2 className="chat-header-name">{contact.name}</h2>
          {/* Muestra el estado del contacto */}
          <span className="chat-header-status">{contact.status}</span>
        </div>
      </div>
      <div className="chat-header-right">
        {/* Botón para realizar una llamada de voz */}
        <button className="chat-header-button">
          <i className="fa fa-phone"></i> {/* Icono de teléfono usando Font Awesome */}
        </button>
        {/* Botón para realizar una videollamada */}
        <button className="chat-header-button">
          <i className="fa fa-video-camera"></i> {/* Icono de cámara de video usando Font Awesome */}
        </button>
        {/* Botón para mostrar un menú de opciones adicionales */}
        <button className="chat-header-button">
          <i className="fa fa-ellipsis-v"></i> {/* Icono de opciones adicionales (tres puntos verticales) usando Font Awesome */}
        </button>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default ChatHeader;
