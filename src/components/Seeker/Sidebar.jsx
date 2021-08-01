import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul class="list-group text-center">
        <li class="list-group-item " aria-current="true">
          <NavLink
            className="side-link"
            to="/seeker-dashboard"
            activeClassName="active"
            exact
          >
            Dashboard
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink
            className="side-link"
            to="/seeker-profile"
            activeClassName="active"
            exact
          >
            Profile
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Recommended Job
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Applied Jobs
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Notifications
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Messages
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Resume
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Search
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Saved
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            Settings
          </NavLink>
        </li>

        <li class="list-group-item">
          <NavLink className="side-link" to="#">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
