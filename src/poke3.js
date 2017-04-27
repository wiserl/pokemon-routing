import React, { Component } from 'react';

export default class Poke3 extends Component {

  constructor() {
    super();
    this.state = { pokemon: {}, id: '88' };
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

    this.getPokemonById(88);
  }

  render() {

    return (
      <div>
        <h1>{this.state.pokemon.name}</h1>
        <p>Type: Poison</p>
        <p>Height: 2'11''</p>
        <p>Weight: 61 lbs</p>
        <p>Facts taken from http://bulbapedia.bulbagarden.net</p>
        <a href="http://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)">Source URL </a>
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