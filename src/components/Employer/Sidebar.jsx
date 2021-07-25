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
        <Link className="side-link" to="/employer-profile">
          <li class="list-group-item">Profile</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">New Job</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Open Jobs</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Applicants</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Candidates Rating</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Saved Candidates</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Selected</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Send Mail</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">Queries</li>
        </Link>
        <Link className="side-link">
          <li class="list-group-item">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
