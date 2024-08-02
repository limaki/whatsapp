import React, { useState } from 'react'; // Importa React y useState para manejar el estado del componente
import '../styles/ChatInput.css'; // Importa los estilos CSS específicos para el componente

// Define el componente funcional ChatInput
function ChatInput({ onSend }) {
  // useState se usa para manejar el estado del mensaje que se está escribiendo
  const [message, setMessage] = useState('');

  // Función para manejar el envío del mensaje
  const handleSend = () => {
    if (message.trim()) { // Verifica que el mensaje no esté vacío o solo contenga espacios en blanco
      onSend(message); // Llama a la función onSend pasada como prop, enviando el mensaje
      setMessage(''); // Limpia el campo de entrada después de enviar el mensaje
    }
  };

  // Función para manejar el evento de pulsar teclas en el campo de entrada
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Verifica si se presionó Enter sin Shift
      e.preventDefault(); // Previene el comportamiento por defecto de Enter (que sería agregar una nueva línea)
      handleSend(); // Llama a la función handleSend para enviar el mensaje
    }
  };

  // Renderiza la interfaz de usuario del componente
  return (
    <div className="chat-input">
      {/* Botón para adjuntar archivos */}
      <button className="attachment-button">
        <i className="fa fa-paperclip"></i> {/* Icono de clip utilizando Font Awesome */}
      </button>

      {/* Campo de entrada para escribir el mensaje */}
      <input
        type="text"
        value={message} // Enlaza el valor del input con el estado message
        onChange={(e) => setMessage(e.target.value)} // Actualiza el estado message cada vez que el usuario escribe
        onKeyDown={handleKeyDown} // Llama a handleKeyDown cuando se presiona una tecla en el input
        placeholder="Escribir mensaje..." // Texto que aparece cuando el campo está vacío
        className="message-input" // Clase CSS para estilizar el campo de entrada
      />

      {/* Botón para enviar el mensaje */}
      <button className="send-button" onClick={handleSend}>
        <i className="fa fa-paper-plane"></i> {/* Icono de avión de papel utilizando Font Awesome */}
      </button>
    </div>
  );
}

export default ChatInput; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación




