import React from "react";
import { NavLink } from "react-router-dom";
import NavIcon from "../../files/NavIcon.png";
import Cookies from "js-cookie";

const Navbar = () => {
  let user = JSON.parse(Cookies.get("user"));
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#81d4fa" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/seeker-dashboard">
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
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => {
                    Cookies.remove("token");
                    Cookies.remove("user");
                  }}
                >
                  Logout
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
