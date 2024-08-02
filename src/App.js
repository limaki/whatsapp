import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatInput from './components/ChatInput';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

import DefaultPage from './pages/DefaultPage';

import ChatPage from './pages/ChatPage';
import './App.css';


/**Imagenes */

import Leonardo from './assets/leonardo.jpeg'
import Martin from './assets/leonardo.jpeg'
import Pedro from './assets/leonardo.jpeg'

const mockContacts = [
  { id: 1, name: 'Pedro Martinez', status: 'Online', avatarUrl: Leonardo },
  { id: 2, name: 'Leonardo Dominguez', status: 'Busy', avatarUrl: Martin },
  { id: 3, name: 'Martin Leguizamon', status: 'Away', avatarUrl: Pedro },
];

// const getInitialMessages = (contactId) => [
//   { id: 1, text: `Sabes lo que me dijo la tipa esa?${contactId}, en fin, como estas amigo`, sender: 'contact', time: '2:30 PM' },
//   { id: 2, text: 'I\'m good, thanks! How about you?', sender: 'me', time: '2:32 PM' },
//   { id: 3, text: `Can we meet later, ${contactId}?`, sender: 'contact', time: '2:35 PM' },
// ];

const getInitialMessages = (contactId) => {
  switch (contactId) {
    case '1':
      return [
        { id: 1, text: `Hola Pedro, ¿cómo estás?`, sender: 'contact', time: '2:30 PM' },
        { id: 2, text: '¡Estoy bien! ¿Y tú?', sender: 'me', time: '2:32 PM' },
      ];
    case '2':
      return [
        { id: 1, text: `Hola Leonardo, ¿qué tal?`, sender: 'contact', time: '2:30 PM' },
        { id: 2, text: 'Todo bien, gracias. ¿Y tú?', sender: 'me', time: '2:32 PM' },
      ];
    case '3':
      return [
        { id: 1, text: `Hola Martín, ¿cómo va todo?`, sender: 'contact', time: '2:30 PM' },
        { id: 2, text: 'Bien, ¿y tú?', sender: 'me', time: '2:32 PM' },
      ];
    default:
      return [];
  }
};

function getContactById(id) {
  return mockContacts.find(contact => contact.id === parseInt(id));
}

function Chat() {
  const { contactId } = useParams();
  const contact = getContactById(contactId);
  const [messageList, setMessageList] = useState(getInitialMessages(contactId));

  const handleSend = (message) => {
    setMessageList([...messageList, { id: Date.now(), text: message, sender: 'me', time: 'Now' }]);
  };

  if (!contact) {
    return <div>No se encuentra contacto</div>;
  }

  return (
    <div>
      <ChatHeader contact={contact} />
      <ChatBody messages={messageList} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/default" element={<DefaultPage />} />
            <Route path="/chat/:contactId" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

