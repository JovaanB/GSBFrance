import React from 'react';
import { NavLink } from 'react-router-dom';

export const FullPageLayout = ({ children }) => {
  return (
    <>
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
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle hover-link"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Praticiens
              </NavLink>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink to="/praticiens" className="nav-link hover-link">
                  Liste
                </NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/medicaments" className="nav-link hover-link">
                Medicaments
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">{children}</div>
      <footer className="page-footer font-small bg-light pt-4 mt-4">
        <div className="mt-md-0 mt-3"></div>

        <div className="footer-copyright text-center py-3">
          © 2020 - GSB FRANCE
        </div>
      </footer>
    </>
  );
};

export default FullPageLayout;
