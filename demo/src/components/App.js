import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/people'>People</Link>
        </div>
        <Route exact path='/' render={() => <div>Home</div>} />
        <Route path='/about' render={() => <div>About</div>} />
        <Route path='/people' render={() => <div>People</div>} />
      </div>
    );
  }
}

export default App;
