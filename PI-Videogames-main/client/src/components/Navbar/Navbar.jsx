import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isUserOptionsVisible, setIsUserOptionsVisible] = useState(false);

  const handleUserButtonClick = () => {
    setIsUserOptionsVisible(!isUserOptionsVisible);
  };

  return (
    <div>
      <div className='primerNav'>
          <ul className='ul'>
            <li>Home</li>
            <li>Create game</li>
          </ul>
          <img
            src='ruta-de-la-imagen.png'
            alt='Usuario'
            className='user-button'
            onClick={handleUserButtonClick}
          />
      </div>
      {isUserOptionsVisible && (
        <div className='user-options'>
          <ul>
            <li>Perfil</li>
            <li>My Library</li>
            <li>Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;





