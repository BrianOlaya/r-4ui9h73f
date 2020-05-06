import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    name:""
  };

  cambiaEspacio =(event)=>{
    this.setState({name :event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.cambiaEspacio}/>
        <p className="repeater">{this.state.name}</p>
      </div>
    );
  }
}

export default App;
