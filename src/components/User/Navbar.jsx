import React from "react";
import { NavLink } from "react-router-dom";
import NavIcon from "../../files/NavIcon.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#81d4fa" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={NavIcon} alt="" className="nav-icon" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
