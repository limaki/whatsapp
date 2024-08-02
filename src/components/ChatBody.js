import React, { useState, useEffect } from 'react'; // Importa React y hooks de estado y efecto
import { getMessagesFromLocalStorage, saveMessagesToLocalStorage, initializeMessagesIfNeeded } from '../utils/localStorage'; // Importa funciones para interactuar con el almacenamiento local
import '../styles/ChatBody.css'; // Importa estilos CSS específicos para el componente ChatBody

// Define el componente funcional ChatBody
function ChatBody({ contactId }) {
  // Estado para almacenar el mensaje actual que se está escribiendo
  const [message, setMessage] = useState('');
  // Estado para almacenar la lista de mensajes del chat
  const [messageList, setMessageList] = useState([]);

  // useEffect que se ejecuta cada vez que cambia el contactId
  useEffect(() => {
    // Inicializa los mensajes en el almacenamiento local si es necesario
    initializeMessagesIfNeeded(contactId);

    // Obtiene los mensajes del almacenamiento local para el contacto actual
    const messages = getMessagesFromLocalStorage(contactId);
    // Actualiza el estado con la lista de mensajes obtenida
    setMessageList(messages);
  }, [contactId]); // Dependencia en contactId para actualizar los mensajes al cambiar de contacto

  // Función para manejar el envío de mensajes
  const handleSend = () => {
    if (message.trim()) { // Verifica que el mensaje no esté vacío o solo contenga espacios
      // Crea un nuevo mensaje con un id único, el texto del mensaje, el remitente y la hora actual
      const newMessage = { id: Date.now(), text: message, sender: 'me', time: 'Now' };
      // Crea una nueva lista de mensajes agregando el nuevo mensaje
      const updatedMessages = [...messageList, newMessage];

      // Actualiza el estado de la lista de mensajes
      setMessageList(updatedMessages);
      // Guarda la nueva lista de mensajes en el almacenamiento local
      saveMessagesToLocalStorage(contactId, updatedMessages);
      // Limpia el campo de entrada del mensaje
      setMessage('');
    }
  };

  // Función para manejar la tecla Enter en el campo de entrada de mensajes
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Verifica si se presionó Enter sin Shift
      e.preventDefault(); // Previene el comportamiento por defecto de Enter (que sería agregar una nueva línea)
      handleSend(); // Llama a la función handleSend para enviar el mensaje
    }
  };

  // Renderiza la interfaz de usuario del componente
  return (
    <div className="chat-body">
      {/* Contenedor para los mensajes del chat */}
      <div className="chat-messages">
        {/* Mapea y renderiza cada mensaje en messageList */}
        {messageList.map(msg => (
          <div
            key={msg.id} // Clave única para cada mensaje
            className={`message ${msg.sender === 'me' ? 'message-me' : 'message-contact'}`} // Aplica una clase diferente si el mensaje es enviado por el usuario o por el contacto
          >
            {/* Muestra el texto del mensaje */}
            <div className="message-text">{msg.text}</div>
            {/* Muestra la hora del mensaje */}
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>
      {/* Contenedor para la entrada de mensajes */}
      <div className="chat-input">
        <input
          type="text" // Tipo de input
          value={message} // Enlaza el valor del input con el estado message
          onChange={(e) => setMessage(e.target.value)} // Actualiza el estado message cuando el usuario escribe
          onKeyDown={handleKeyDown} // Llama a handleKeyDown cuando se presiona una tecla
          placeholder="Escribir un mensaje..." // Texto de marcador de posición cuando el campo está vacío
        />
        {/* Botón para enviar el mensaje */}
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default ChatBody;
