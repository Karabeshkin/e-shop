import React from 'react';
import { Link } from 'react-router-dom';

function Navbar():JSX.Element {
  return (

  <nav className="navbar">
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Своя игра</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/authorization">LogIn</Link></li>
        <li><Link to="/logout">LogOut</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
