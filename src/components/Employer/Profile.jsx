import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Summary from "./profile/Summary";
import Contact from "./profile/Contact";
import Organization from "./profile/Organization";
import Employee from "./profile/Employee";
import Pictures from "./profile/Pictures";
import Locations from "./profile/Locations";
import Leadership from "./profile/Leadership";

const Profile = () => {
  const [profile, setProfile] = useState("Summary");

  return (
    <>
      <div>
        <Navbar />
        <div style={{ backgroundColor: "#e0f7fa", height: "87vh" }}>
          <div className="row">
            <div className="col-sm-2 mt-5">
              <Sidebar />
            </div>
            <div className="col-sm-10">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="card shadow-lg mt-5">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="https://www.logotaglines.com/wp-content/uploads/2021/02/tesla_logo_tagline-slogan-customer-care.png"
                            alt=""
                            className="profile-image"
                          />
                        </div>
                        <div className="col-md-9 ">
                          <div className="row">
                            <div>
                              <nav
                                className="navbar navbar-expand-lg navbar-light "
                                style={{ backgroundColor: "#81d4fa" }}
                              >
                                <div className="container-fluid">
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
                                    className="collapse navbar-collapse "
                                    id="navbarNavDropdown"
                                  >
                                    <ul className="navbar-nav m-auto">
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() => setProfile("Summary")}
                                        >
                                          Summary
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Organization")
                                          }
                                        >
                                          Organization
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Leadership")
                                          }
                                        >
                                          Leadership
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() => setProfile("Employee")}
                                        >
                                          Employee
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() => setProfile("Pictures")}
                                        >
                                          Pictures
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() => setProfile("Contact")}
                                        >
                                          Contact
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Locations")
                                          }
                                        >
                                          Locations
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </nav>
                            </div>
                          </div>
                          <div className="row">
                            {profile == "Summary" ? <Summary /> : ""}
                            {profile == "Organization" ? <Organization /> : ""}
                            {profile == "Employee" ? <Employee /> : ""}
                            {profile == "Pictures" ? <Pictures /> : ""}
                            {profile == "Contact" ? <Contact /> : ""}
                            {profile == "Leadership" ? <Leadership /> : ""}
                            {profile == "Locations" ? <Locations /> : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
