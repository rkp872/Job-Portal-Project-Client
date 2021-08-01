import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployerService from "../../services/EmployerService";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const NewJob = () => {
  const initialState = {
    jobTitle: "",
    location: "",
    numOfOpening: "",
    skills: [],
    responsibilities: [],
    qualifications: [],
  };
  const [skill, setSkill] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [qualifications, setQualifications] = useState("");

  const [jobDesc, setJobDesc] = useState(initialState);
  const arrayAdd = (e) => {
    if (e == "skills") {
      jobDesc.skills.push(skill);
      setSkill("");
    } else if (e == "responsibility") {
      jobDesc.responsibilities.push(responsibility);
      setResponsibility("");
    } else if (e == "qualification") {
      jobDesc.qualifications.push(qualifications);
      setQualifications("");
    }
  };
  const submitForm = () => {
    if (skill) arrayAdd("skills");
    if (responsibility) arrayAdd("responsibility");
    if (qualifications) arrayAdd("qualification");
    console.log(jobDesc);
    EmployerService.addNewJob(jobDesc).then((res) => {
      console.log(res.data);
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
                  <div className="card ParentCardScrollStyle  shadow-lg mt-5">
                    <div className="card-body">
                      <div>
                        <h1 className="text-center ">Job Description</h1>
                        <hr />
                        <div className="container mt-2">
                          <label className="newjob-label" htmlFor="">
                            Job Title
                          </label>
                          <input
                            type="text"
                            className="form-control mt-1"
                            onChange={(e) => {
                              setJobDesc({
                                ...jobDesc,
                                jobTitle: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="container mt-2">
                          <label className="newjob-label" htmlFor="">
                            Job Location
                          </label>
                          <input
                            type="text"
                            className="form-control mt-1"
                            onChange={(e) => {
                              setJobDesc({
                                ...jobDesc,
                                location: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="container mt-2">
                          <label className="newjob-label" htmlFor="">
                            Number of Openings
                          </label>
                          <input
                            type="number"
                            className="form-control mt-1"
                            min="1"
                            onChange={(e) => {
                              setJobDesc({
                                ...jobDesc,
                                numOfOpening: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="container mt-2">
                          <label className="newjob-label" htmlFor="">
                            Required Skills
                          </label>
                          {jobDesc.skills
                            ? jobDesc.skills.map((data) => <li>{data}</li>)
                            : ""}
                          <input
                            type="text"
                            className="form-control mt-1"
                            name="skills"
                            value={skill}
                            onChange={(e) => {
                              setSkill(e.target.value);
                            }}
                          />
                          <span className="text-center">
                            <Link
                              className="btn btn-sm btn-outline-primary "
                              onClick={() => {
                                arrayAdd("skills");
                              }}
                            >
                              <i className="fas fa-plus"></i>
                            </Link>
                          </span>
                        </div>
                        <div className="container mt-2">
                          <label className="newjob-label" htmlFor="">
                            Job Responsibilities
                          </label>
                          {jobDesc.responsibilities
                            ? jobDesc.responsibilities.map((data) => (
                                <li>{data}</li>
                              ))
                            : ""}
                          <input
                            type="text"
                            className="form-control mt-1"
                            name="responsibility"
                            value={responsibility}
                            onChange={(e) => {
                              setResponsibility(e.target.value);
                            }}
                          />
                          <span className="text-center">
                            <Link
                              className="btn btn-sm btn-outline-primary "
                              onClick={() => {
                                arrayAdd("responsibility");
                              }}
                            >
                              <i className="fas fa-plus"></i>
                            </Link>
                          </span>
                        </div>
                        <div className="container mt-2">
                          <label className="newjob-label" htmlFor="">
                            Required Qualifications
                          </label>
                          {jobDesc.qualifications
                            ? jobDesc.qualifications.map((data) => (
                                <li>{data}</li>
                              ))
                            : ""}
                          <input
                            type="text"
                            className="form-control mt-1"
                            name="qualification"
                            value={qualifications}
                            onChange={(e) => {
                              setQualifications(e.target.value);
                            }}
                          />
                          <span className="text-center">
                            <Link
                              className="btn btn-sm btn-outline-primary "
                              onClick={() => {
                                arrayAdd("qualification");
                              }}
                            >
                              <i className="fas fa-plus"></i>
                            </Link>
                          </span>
                        </div>
                        <div className="container text-center">
                          <button
                            className="submit"
                            className="btn btn-outline-primary"
                            onClick={submitForm}
                          >
                            Submit
                          </button>
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
/* 
jobTitle;
location;
numOfOpening;
skills;
responsibilities;
qualifications;
*/

export default NewJob;
