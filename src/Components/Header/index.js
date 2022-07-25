import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './index.css';

function Header() {
//   const activeClassName = 'underline';
  return (
    <header className="app__header">
      <img src={logo} className="app__logo" alt="logo" />

      <nav className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          List Page

        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/form"
        >
          Form Page

        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
