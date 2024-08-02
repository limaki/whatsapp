import React from 'react'; // Importa React para crear componentes
import ContactList from '../components/ContactList'; // Importa el componente ContactList
import '../styles/HomePage.css'; // Importa los estilos específicos para la página de inicio
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación programática

// Define el componente funcional HomePage
function HomePage() {
  // Hook de React Router para la navegación programática
  const navigate = useNavigate();

  // Maneja la selección de un contacto de la lista
  const handleSelectContact = (contact) => {
    // Redirige al usuario a la página de chat del contacto seleccionado usando su ID
    navigate(`/chat/${contact.id}`);
  };

  // Renderiza la página de inicio
  return (
    <div className="home-page">
      <div className="home-header">
        <h2>Lista de contactos</h2>
      </div>
      {/* Renderiza el componente ContactList y pasa la función handleSelectContact como prop */}
      <ContactList onSelectContact={handleSelectContact} />
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default HomePage;
