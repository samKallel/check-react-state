// les importations: react, component, photo ( car elle est dans le dossier sorce) 
// et le App.css pour la mise en page.

import React, { Component } from 'react';
import photo from "../img/my-image.png";
import "../App.css";

// on utilise les classe pour le composant App.js 

export default class Person extends Component {

    // le constructeur pour les declaration 
    constructor(props){
        super(props);
      // l'objet personne est declare dynamiquement
        this.personne = {
          fullName: "Samiha Kallel",
          bio: "Ingenieur en informatique",
          profession: "Developpeur FS-JS",
          imgProfile: photo
          
        }
        // le compteur du temps ecoule
        this.state = {timeElapsed: 0 };
      }
// calculer le temps a l'aide de setInterval
// on utilise la fonction predefinie componentDidMount pour activer le compteur une fois
// le component Person est appele (monter dans le DOM)
    componentDidMount = () => {
      this.timer = setInterval(() => {
        this.setState({ timeElapsed: this.state.timeElapsed + 1 });
      }, 1000);
    }
    // on efface le compteur une fois le composant Person n'est plus charge
    componentWillUnmount() {
      clearInterval(this.timer);
    }
// le rendu de notre component Person le fulllName, le bio, imageProfile, 
// profession et un compteur de temps
  render() {
    return (
      <div className='personnage'>
    <p> Temps ecoule {this.state.timeElapsed} seconds</p>
      <h2>{this.personne.fullName}</h2>
      <h3>{this.personne.bio}</h3>
      <img src= {this.personne.imgProfile} alt='maphoto'/>  
      <h3>{this.personne.profession}</h3> 
      </div>
    )
  }
}
