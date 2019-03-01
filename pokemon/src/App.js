import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PokéApp</h1>
        <PokemonList />
      </div>
    );
  }
}

export default App;
