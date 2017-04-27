import React, { Component } from 'react';

export default class Poke2 extends Component {

  constructor() {
    super();
    this.state = { pokemon: {}, id: '106' };
  }

  getPokemonById(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(pokemon => {
        this.setState({ pokemon, id });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {

    this.getPokemonById(106);
  }

  render() {

    return (
      <div>
        <h1>{this.state.pokemon.name}</h1>
        <p>Type: Fighting</p>

        <p>Height: 4'11''</p>
        <p>Weight: 109 lbs</p>

        <p>Facts taken from http://bulbapedia.bulbagarden.net/</p>
        <a href="http://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)">Source URL </a>
        <nav>
          <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/blastoise">Blastoise</a></li>
            <li><a href="http://localhost:3000/hitmonlee">Hitmonlee</a></li>
            <li><a href="http://localhost:3000/grimer">Grimer</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}