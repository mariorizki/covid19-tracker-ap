import React from 'react';
import './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="Nav">
      <ul className="NavUl">
        <li className="NavItem">
          <Link className="Link" to="/">
            Home
          </Link>
        </li>

        <li className="NavItem">
          <Link className="Link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
