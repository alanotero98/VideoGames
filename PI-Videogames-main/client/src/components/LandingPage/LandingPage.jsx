import React from 'react'
import './LandingPage.css'

const LandingPage = ({videogames}) => {
 
  
  return (
    <div className='videoGames'>
          {videogames.map(videojuego => (
          <div key={videojuego.id}>
            <h1>{videojuego.name}</h1>
            <p>ID: {videojuego.id}</p>
          </div>
        ))}
    </div>
    
   
  )
}

export default LandingPage