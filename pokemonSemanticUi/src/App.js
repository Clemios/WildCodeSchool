import React, { Component, Fragment } from 'react';
import './App.css';
import PokemonList from './components/PokemonList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <PokemonList />
      </Fragment>
    );
  }
}

export default App;
