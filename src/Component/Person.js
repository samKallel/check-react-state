import React, { Component } from 'react';
import photo from "../img/my-image.png";
import "../App.css";

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {timeElapsed: 0 };
      }
   
    componentDidMount = () => {
      this.timer = setInterval(() => {
        this.setState({ timeElapsed: this.state.timeElapsed + 1 });
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }

  render() {
    return (
      <div className='personnage'>
    <p> Temps ecoule {this.state.timeElapsed} seconds</p>
      <h2>Samiha Kallel</h2>
      <h3>Ingenieur en informatique</h3>  
      <img src={photo} alt='maphoto'/>  
      <h3>Developpeur</h3> 

      </div>
    )
  }
}
