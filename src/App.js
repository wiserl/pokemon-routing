import React, { Component } from 'react';
import Home from './Home';
import NotFound from './NotFound';
import Poke1 from './poke1';
import Poke2 from './poke2';
import Poke3 from './poke3';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blastoise" component={Poke1} />
          <Route exact path="/hitmonlee" component={Poke2} />
          <Route exact path="/grimer" component={Poke3} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
