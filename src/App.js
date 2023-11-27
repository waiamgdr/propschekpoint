import React from 'react'
import './App.css';
import joueurs from './joueurs';


import Player from './Player';
const App = () => {
  return (
    <div  className='cot'>
       {/* affichage tous les palyers d'un array joueurs dans une carte passe par  props   */}
      <div className='info' >
       { joueurs.map (el => <Player   className="info" pr={el}/>)} 
    
    </div>
    </div>

  )
}
// Spécifie les valeurs par défaut des props :
Player.defaultprops ={    
  " id": null,
"name":" inconnu",
"team":"inconnu",
"nationality": "inconnu",
"jerseyNumber": null,
"age": null,
"imageUrl": null };

export default App