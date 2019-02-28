import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class PokemonDetails extends Component {
  static propTypes = {
  }

  state = {
    detail: {},
    detailUrl: this.props.details.url
  }

  componentWillMount() {
    fetch(this.state.detailUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let detail = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types,
          moves: data.moves
        }
        this.setState({ detail })
      })
  }

  renderTypes = (types) => {
    if(!types) {
      return false
    }
    return types.map((type) => <p>{type.type.name}</p>)
  }

  renderMoves = (moves) => {
    if (!moves) {
      return false
    }
    return moves.map((move) => <p>{move.move.name}</p>)
  }

  render() {
    console.log('STATE',this.state)
    return (
      <Fragment>
      <p>{this.state.detail.name}</p>
      <img alt={this.state.detail.id} src={this.state.detail.image}></img>
      <p>Types : </p>
      {this.renderTypes(this.state.detail.types)}
        <p>Attaques : </p>
        {this.renderMoves(this.state.detail.moves)}
      <p>____________________________________</p>
      </Fragment>
    );
  }
}
