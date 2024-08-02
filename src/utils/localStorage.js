// Objeto que contiene mensajes predeterminados para tres contactos diferentes
const defaultMessages = {
  1: [
    { id: 1, text: 'No sabes lo que me paso el otro dia jaja', sender: 'contact', time: '2:30 PM' },
    { id: 2, text: 'jaja ni me cuentes, seguro te mandaste alguna', sender: 'me', time: '2:32 PM' },
    { id: 3, text: 'he amigo como estas?', sender: 'contact', time: '2:35 PM' }
  ],
  2: [
    { id: 1, text: 'La proxima arrancamos el laburo con todo', sender: 'contact', time: '3:00 PM' },
    { id: 2, text: 'si xd para que no nos despidan devuelta', sender: 'me', time: '3:05 PM' },
    { id: 3, text: 'el proximo finde sale joda? jaja', sender: 'contact', time: '3:10 PM' }
  ],
  3: [
    { id: 1, text: 'Me vas a contar que paso al final con tu novia?', sender: 'contact', time: '3:00 PM' },
    { id: 2, text: 'si, la corte y le dije solo amigos, muy intensa para mi', sender: 'me', time: '3:00 PM' },
    { id: 3, text: 'jaja no podesss', sender: 'contact', time: '4:10 PM' }
  ]
};

// Recupera los mensajes del almacenamiento local para un contacto específico
export const getMessagesFromLocalStorage = (contactId) => {
  // Intenta obtener los mensajes almacenados bajo la clave 'messages-{contactId}'
  const messages = localStorage.getItem(`messages-${contactId}`);
  
  // Si se encuentran mensajes, los convierte de una cadena JSON a un objeto JavaScript
  // Si no se encuentran mensajes, devuelve un array vacío
  return messages ? JSON.parse(messages) : [];
};

// Guarda los mensajes en el almacenamiento local bajo una clave específica para el contacto
export const saveMessagesToLocalStorage = (contactId, messages) => {
  // Convierte el array de mensajes a una cadena JSON y lo almacena bajo la clave 'messages-{contactId}'
  localStorage.setItem(`messages-${contactId}`, JSON.stringify(messages));
};

// Inicializa los mensajes para un contacto si no hay mensajes guardados en el almacenamiento local
export const initializeMessagesIfNeeded = (contactId) => {
  // Recupera los mensajes del almacenamiento local para el contacto
  const messages = getMessagesFromLocalStorage(contactId);
  
  // Si no se encuentran mensajes (es decir, la longitud del array es 0)
  if (messages.length === 0) {
    // Obtiene los mensajes predeterminados para el contacto, si existen
    const initialMessages = defaultMessages[contactId] || [];
    
    // Guarda los mensajes predeterminados en el almacenamiento local
    saveMessagesToLocalStorage(contactId, initialMessages);
  }
};
