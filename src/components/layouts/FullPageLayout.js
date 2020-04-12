import React from 'react';
import { NavLink } from 'react-router-dom';

export const FullPageLayout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          <img
            src="../logo.png"
            width="50px"
            height="40px"
            className="d-inline-block align-top"
            alt="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/praticiens" className="nav-link hover-link">
                Praticiens
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/medicaments" className="nav-link hover-link">
                Medicaments
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid bg-light" style={{ height: '100vh' }}>
        {children}
      </div>
    </div>
  );
};

export default FullPageLayout;
