import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Pokemon</h1>
                <p>This app allows you to view facts about three different pokemon</p>
                <nav>
                    <ul>
                        <li><a href="http://localhost:3000/">Home</a></li>
                        <li><a href="http://localhost:3000/blastoise">Blastoise</a></li>
                        <li><a href="http://localhost:3000/hitmonlee">Hitmonlee</a></li>
                        <li><a href="http://localhost:3000/grimer">Grimer</a></li>
                    </ul>
                </nav>
</div>
        );
    }

}

  

 