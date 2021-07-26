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
import Cookies from "js-cookie";
import ImageUploader from "../../services/ImageUploader";
import UserService from "../../services/UserService";

const Profile = () => {
  const [profile, setProfile] = useState("Summary");
  const [picEdit, setPicEdit] = useState("none");
  const [loader, setLoader] = useState("none");
  const [picEditBtn, setPicEditBtn] = useState("");

  const user = JSON.parse(Cookies.get("user"));
  const [userState, setUserState] = useState(user);
  console.log("userstst : ", userState);
  const updatePicture = () => {
    UserService.updateUser(userState).then((res) => {
      console.log(("Updated User : ", res.data));
      Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
    });
  };
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
                          <div>
                            <img
                              src={
                                userState.picture ||
                                `https://res.cloudinary.com/rohit872cloud/image/upload/v1627214826/Careercare/default_ddgyzh.png`
                              }
                              alt=""
                              className="profile-image"
                            />
                            <div
                              className="container my-3"
                              style={{ display: `${picEdit}` }}
                            >
                              <input
                                type="file"
                                name="picture"
                                className="form-control"
                                onChange={(e) => {
                                  setLoader("");
                                  setPicEdit("none");
                                  const sPic = new FormData();
                                  sPic.append("upload_preset", "Careercare");
                                  sPic.append("cloud_name", "rohit872cloud");
                                  sPic.append("file", e.target.files[0]);
                                  ImageUploader.uploadImage(sPic).then(
                                    (res) => {
                                      console.log("res : ", res.data);
                                      setUserState({
                                        ...userState,
                                        picture: res.data.url,
                                      });
                                      setLoader("none");
                                      setPicEdit("");
                                    }
                                  );
                                }}
                              />
                              <div className="container text-center">
                                <button className="btn" onClick={updatePicture}>
                                  <i
                                    className="fas fa-check fa-2x"
                                    style={{ color: "green" }}
                                  ></i>
                                </button>
                              </div>
                            </div>
                            <div
                              className="container text-center mt-1"
                              style={{ display: `${picEditBtn}` }}
                            >
                              <Link
                                className="btn btn-sm btn-outline-success"
                                onClick={() => {
                                  setPicEditBtn("none");
                                  setPicEdit("");
                                }}
                              >
                                <span className="fas fa-pen"></span>
                              </Link>
                            </div>
                            <div
                              className="text-center my-2"
                              style={{ display: `${loader}` }}
                            >
                              <i
                                className="fa fa-spinner  fa-spin "
                                aria-hidden="true"
                                style={{ fontSize: "30px" }}
                              ></i>
                            </div>
                          </div>
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
