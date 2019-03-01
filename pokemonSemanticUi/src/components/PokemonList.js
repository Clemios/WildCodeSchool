import React, { Component, Fragment } from 'react';
import { Menu, Container, Button, Grid } from 'semantic-ui-react'
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
    if (!link) {
      return false
    }
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
    return (
      pokemonList.map((pokemon) => (
        <Grid.Column key={pokemon.name}>
          <PokemonDetails details={pokemon}></PokemonDetails>
        </Grid.Column>
      ))
    )
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
      <Fragment>
        <Menu fixed='top' color='red' inverted>
          <Menu.Item header>
            PokéApp
          </Menu.Item>
          <Menu.Item position='right'>
            <Button inverted circular icon='chevron left' onClick={() => this.fetchNewData(previousLink)}/>
            <Button inverted circular icon='chevron right' style={{ marginLeft: '4px' }} onClick={() => this.fetchNewData(nextLink)}/>
          </Menu.Item>
        </Menu>
        <Container style={{ marginTop: '5em' }}>
          <Grid doubling columns='6'>
            {this.renderList(pokemonList)}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
