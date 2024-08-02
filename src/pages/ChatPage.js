import React from 'react'; // Importa React para crear componentes
import { useParams } from 'react-router-dom'; // Importa useParams para acceder a los parámetros de la URL
import ChatHeader from '../components/ChatHeader'; // Importa el componente ChatHeader
import ChatBody from '../components/ChatBody'; // Importa el componente ChatBody
import ChatInput from '../components/ChatInput'; // Importa el componente ChatInput
import { getMessagesFromLocalStorage, saveMessagesToLocalStorage } from '../utils/localStorage'; // Importa funciones para manejar el almacenamiento local

// Importa las imágenes de los avatares de los contactos
import Leonardo from '../assets/leonardo.jpeg';
import marin from '../assets/marin.jpeg';
import pedro from '../assets/pedro.jpeg';

// Función para simular la obtención de datos de un contacto en función de su ID
const mockContact = (contactId) => {
  // Define una lista de contactos simulada
  const contacts = [
    { id: 1, name: 'Leonardo Dominguez', avatarUrl: Leonardo, status: 'En Linea' },
    { id: 2, name: 'Martin Leguizamon', avatarUrl: marin, status: 'En Linea' },
    { id: 3, name: 'Pedro Martinez', avatarUrl: pedro, status: 'Desconectado' },
  ];

  // Encuentra y devuelve el contacto que coincide con el ID proporcionado
  return contacts.find(contact => contact.id === parseInt(contactId, 10)) || {}; 
};

// Define el componente funcional ChatPage
function ChatPage() {
  // useParams se usa para obtener el parámetro de la URL correspondiente a contactId
  const { contactId } = useParams();
  // Obtiene los detalles del contacto utilizando la función mockContact
  const contact = mockContact(contactId);

  // Renderiza la página de chat
  return (
    <div className="chat-page">
      {/* Renderiza el componente ChatHeader, pasando el contacto como prop */}
      <ChatHeader contact={contact} />
      {/* Renderiza el componente ChatBody, pasando el contactId como prop */}
      <ChatBody contactId={contactId} />
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default ChatPage;
