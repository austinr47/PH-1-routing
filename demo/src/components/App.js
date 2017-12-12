import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character';
import RouterRoutes from '../router';


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
        <RouterRoutes />
      </div>
    );
  }
}

export default App;
