import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList>

        </PokemonList>
      </div>
    );
  }
}

export default App;
