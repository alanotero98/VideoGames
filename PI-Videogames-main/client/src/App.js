import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar.jsx';
import NavbarLateral from './components/NavbarLateral/NavbarLateral';






function App() {
  const [videogames, setVideoGames] = useState([]);
  const apiUrl = 'https://rawg.io/api/genres?key=77ad8fede3f5407d85e470db081e85b0';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        // Aquí puedes manejar la respuesta del servidor
        setVideoGames(response.data);
        
      })
      .catch(error => {
        // Aquí puedes manejar los errores en caso de que ocurran
        console.error('Error al hacer la petición:', error.message);
      });
  }, []);

  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <div className='landing'>  
      {videogames.length > 0 ? (
        <LandingPage videogames={videogames} />
      ) : (
        <div>Cargando...</div>
      )}
      <NavbarLateral/>
    </div>
    </>
  );
}

export default App;
