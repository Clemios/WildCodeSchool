import React, { Component } from 'react';
import PokemonDetails from './PokemonDetails'

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      previousLink: null,
      nextLink: null
    }
  }

  // La methode componentWillMount de React s'exécute juste avant le render, parfait pour préparer le state d'un component
  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      console.log('INITIAL DATA FETCH', data)
      const newState = {
        pokemonList: data.results,
        nextLink: data.next,
        previousLink: data.previous
      }
      // Cette syntaxe avec les ... s'apelle le spread
      this.setState({ ...newState })
    })
  }

  fetchNewData = (link) => {
    fetch(link)
      .then(response => response.json())
      .then(data => {
        console.log('FETCH NEW DATA', data)
        const newState = {
          pokemonList: data.results,
          nextLink: data.next,
          previousLink: data.previous
        }
        // Cette syntaxe avec les ... s'apelle le spread
        this.setState({ ...newState })
      })
  }

  // Je passe par une fonction pour tester avant de render
  renderList = (pokemonList) => {
    // console.log('pokemonList =>', pokemonList)
    if (!pokemonList){
      // Si pas de data, je retourne false pour ne rien render
      return false
    }
    return (pokemonList.map((pokemon) => <PokemonDetails key={pokemon.name} details={pokemon}></PokemonDetails>))
  }
  render() {
    // console.log('this.state =>', this.state);
    // Cette syntaxe s'apelle le destructuring
    const { pokemonList, previousLink, nextLink } = this.state
    // Elle est une simplification de toutes les lignes suivantes
    // const pokemonList = this.state.pokemonList
    // const previousLink = this.state.previousLink
    // const nextLink = this.state.nextLink
    return (
      <div>
        <button onClick={() => this.fetchNewData(previousLink)}>Previous</button>
        <button onClick={() => this.fetchNewData(nextLink)}>Next</button>
        {this.renderList(pokemonList)}
      </div>
    );
  }
}
