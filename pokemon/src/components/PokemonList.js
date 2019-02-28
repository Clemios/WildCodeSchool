import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonDetails from './PokemonDetails'
export default class PokemonList extends Component {
  static propTypes = {

  }

  state = {
    pokeList: []
  }

  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => data.results)
    .then(pokeList => {
      console.log(pokeList)
      this.setState({ pokeList })
    })
  }
  render() {
    const { pokeList } = this.state
    return (
      <Fragment>
      <p>Liste des pokémons</p>
        {pokeList.map((poke) => <PokemonDetails details={poke}></PokemonDetails>)}
      </Fragment>
    );
  }
}
