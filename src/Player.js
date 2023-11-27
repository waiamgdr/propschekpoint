import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Player = (props) => {
  return (
    // Création une carte  à l'aide de React-bootstrap , contenant tous des informations d'un  joueur  
    <div   className=' ino'>
        <Card style={{ width: 300 }}>
       
      <Card.Img variant="top"    src={props.pr.imageUrl} alt={props.pr.name} style={{width:300 ,height:300}} />      
      <Card.Body style={{ backgroundColor:'rgb(106, 106, 104,0.5)' }}>
        <Card.Title>{props.pr.name}</Card.Title>
        <Card.Text>
        <p>Équipe: {props.pr.team}</p>
        <p>Nationalité: {props.pr.nationality}</p>
      <p>Numéro de Maillot: {props.pr.jerseyNumber}</p>
      <p>Âge: {props.pr.age}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
       















     
   
    
    




    </div>
  )
}




export default Player
