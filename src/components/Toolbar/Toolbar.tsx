import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Plovo</span>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new-dish"
                className="nav-link"
              >
                New dish
              </NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Toolbar;