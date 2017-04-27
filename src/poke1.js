import React, { Component } from 'react';

export default class Poke1 extends Component {

  constructor() {
    super();
    this.state = { pokemon: {}, id: '9' };
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
   
    this.getPokemonById(9);
  }

  render() {

    return (
      <div>
        <h1>{this.state.pokemon.name}</h1>
        <p>Type: Water</p>
           <p>Height: 5'3''</p>
           <p>Weight: 49.6 lbs</p>
           <p>Facts taken from pokecharms.com</p>
           <a href="https://pokecharms.com/works/blastoise-line-facts-and-trivia.24325/">Source URL </a>
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
 