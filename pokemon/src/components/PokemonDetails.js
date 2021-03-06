import React, { Component } from 'react';

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    }
  }

  componentWillMount() {
    // Je récupère la prop details.url envoyée par le parent
    fetch(this.props.details.url)
      .then(response => response.json())
      .then(data => {
        //console.log('FETCH DETAILS DATA', data)
        const details = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types,
        }
        // Je met a jour la clef details de mon state
        this.setState({ details })
      })
  }

  // Je passe par une fonction pour tester avant de render
  renderTypes = (types) => {
    // console.log('types =>', types);
    if(!types) {
      // Si pas de data, je retourne false pour ne rien render
      return false
    }
    return types.map((type) => <p key={type.type.name}>{type.type.name}</p>)
  }

  render() {
    // console.log('this.state =>', this.state);
    // Cette syntaxe s'apelle le destructuring
    const { id, name, image, types } = this.state.details
    // Elle est une simplification de toutes les lignes suivantes
    // const id = this.state.details.id
    // const name = this.state.details.name
    // const image = this.state.details.image
    // const types = this.state.details.types
    return (
      <div>
        <h3>#{id} {name}</h3>
        <img alt={name} src={image}></img>
        <h5>Types : </h5>
        {this.renderTypes(types)}
        <p>____________________________________</p>
      </div>
    );
  }
}
