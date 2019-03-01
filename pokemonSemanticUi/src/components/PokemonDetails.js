import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react'

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
          abilities: data.abilities,
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
    return types.map((type) => <span key={type.type.name}>{type.type.name}</span>)
  }

  // Je passe par une fonction pour tester avant de render
  renderAbilities = (abilities) => {
    // console.log('abilities =>', abilities);
    if (!abilities) {
      // Si pas de data, je retourne false pour ne rien render
      return false
    }
    return abilities.map((ability) => (
      <Grid.Column key={ability.ability.name}>
        {ability.ability.name}
      </Grid.Column>
      ))
    }

  render() {
    // console.log('this.state =>', this.state);
    // Cette syntaxe s'apelle le destructuring
    const { id, name, image, types, abilities } = this.state.details
    // Elle est une simplification de toutes les lignes suivantes
    // const id = this.state.details.id
    // const name = this.state.details.name
    // const image = this.state.details.image
    // const types = this.state.details.types
    return (
        <Card>
          <Image src={image} />
          <Card.Content>
            <Card.Header>#{id} {name}</Card.Header>
            <Card.Meta>
              {this.renderTypes(types)}
            </Card.Meta>
            <Card.Description>
              <Grid doubling columns='2'>
                {this.renderAbilities(abilities)}
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}
