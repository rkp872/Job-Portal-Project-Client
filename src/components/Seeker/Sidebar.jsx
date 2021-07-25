import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul class="list-group text-center">
        <Link className="side-link">
          <li class="list-group-item active" aria-current="true">
            Dashboard
          </li>
        </Link>
        <Link className="side-link" to="/seeker-profile">
          <li class="list-group-item">Profile</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Recommended Job</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Applied Jobs</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Notifications</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Messages</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Resume</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Search</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Saved</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Settings</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">About Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
