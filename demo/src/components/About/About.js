import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <NavLink activeClassName='red' to='/about/FAQ'>FAQ</NavLink>
      <NavLink activeClassName='green' to='/about/company'>Company</NavLink>
      {props.children}
    </div>
  )
}