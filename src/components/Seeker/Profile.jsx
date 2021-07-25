import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Summary from "./profile/Summary";
import Contact from "./profile/Contact";
import Professional from "./profile/Professional";
import Education from "./profile/Education";
import Certifications from "./profile/Certifications";
import Achievements from "./profile/Achievements";
import Personal from "./profile/Personal";

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
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                            alt=""
                            className="profile-image"
                          />
                          <h2
                            className="text-center"
                            style={{ fontWeight: "bold", color: "Highlight" }}
                          >
                            Swati Raj
                          </h2>
                        </div>
                        <div
                          className="col-md-9 "
                          style={{ maxHeight: "65vh" }}
                        >
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
                                          onClick={() => setProfile("Contact")}
                                        >
                                          Contact
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Professional")
                                          }
                                        >
                                          Professional
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Education")
                                          }
                                        >
                                          Education
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Certifications")
                                          }
                                        >
                                          Certifications
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() =>
                                            setProfile("Achievements")
                                          }
                                        >
                                          Achievements
                                        </Link>
                                      </li>
                                      <li className="nav-item ">
                                        <Link
                                          className="nav-link"
                                          onClick={() => setProfile("Personal")}
                                        >
                                          Personal
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
                            {profile == "Contact" ? <Contact /> : ""}
                            {profile == "Professional" ? <Professional /> : ""}
                            {profile == "Education" ? <Education /> : ""}
                            {profile == "Certifications" ? (
                              <Certifications />
                            ) : (
                              ""
                            )}
                            {profile == "Achievements" ? <Achievements /> : ""}
                            {profile == "Personal" ? <Personal /> : ""}
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
