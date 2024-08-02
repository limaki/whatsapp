import React, { useState } from 'react'; // Importa React y el hook useState para manejar estados
import '../styles/ProfilePage.css'; // Importa los estilos específicos de la página de perfil

import ulises from '../assets/ulises.png'; // Importa la imagen de perfil de un usuario ficticio

// Definición de un objeto user que contiene la información del usuario
const user = {
  name: 'Ulises',
  status: 'Estas son mis convicciones, si no te gusta tengo otras..',
  avatarUrl: ulises
};

// Definición del componente funcional ProfilePage
function ProfilePage() {
  // Se usan estados locales para almacenar el nombre y el estado del usuario
  const [name, setName] = useState(user.name);
  const [status, setStatus] = useState(user.status);

  // Función que maneja el evento de guardar
  const handleSave = () => {
    // Por ahora, solo muestra una alerta cuando se guarda el perfil
    alert('perfil guardado!');
  };

  // Renderizado del componente
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Perfil</h1> {/* Título de la página */}
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          {/* Muestra la imagen del avatar del usuario */}
          <img src={user.avatarUrl} alt="Profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            {/* Campo de entrada para editar el nombre del usuario */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="profile-status">
            {/* Área de texto para editar el estado del usuario */}
            <textarea
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status"
            />
          </div>
          {/* Botón para guardar los cambios */}
          <button className="save-button" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default ProfilePage;
