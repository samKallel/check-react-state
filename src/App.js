import React, { Component } from 'react'
import Person from './Component/Person'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {show: false};
  }
  basculer =() => this.setState({show: !this.state.show});
  render() {
    return (
      <div>
        
        <button onClick={this.basculer}> Toggle </button>
        {this.state.show? <Person/>: null}
      
        
      </div>
    )
  }
}
