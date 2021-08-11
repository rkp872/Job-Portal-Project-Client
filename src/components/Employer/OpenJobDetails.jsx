import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLocation, useHistory, Link } from "react-router-dom";
import EmployerService from "../../services/EmployerService";

const OpenJobDetails = (props) => {
  const [jobData, setjobData] = useState(props.location.state.jobData);
  const [numOfApplicants, setNumOfApplicants] = useState("");
  useEffect(() => {
    EmployerService.getNumberOfApplicants(jobData.id).then((res) => {
      console.log(res.data);
      setNumOfApplicants(res.data);
    });
  }, []);
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
                  <div className="card shadow-lg mt-5 ParentCardScrollStyle">
                    <div className="card-body">
                      <div>
                        <h3>{jobData.jobTitle}</h3>
                        <h6>{jobData.location}</h6>
                        <h6>
                          Number of applicants : {numOfApplicants}
                          {numOfApplicants != "" ? (
                            <span className="m-2">
                              <Link
                                to={{
                                  pathname: "/employer-applicantof-job",
                                  state: { jobId: jobData.id },
                                }}
                              >
                                <i className="fas fa-bars"></i>
                              </Link>
                            </span>
                          ) : (
                            ""
                          )}
                        </h6>
                        <h7>Number of Openings : {jobData.numOfOpening}</h7>
                        <h5>Required Skills</h5>
                        {jobData.skills.map((skill) => (
                          <li>{skill}</li>
                        ))}
                        <h5>Job Responsibilities</h5>
                        {jobData.responsibilities.map((resp) => (
                          <li>{resp}</li>
                        ))}
                        <h5>Required Qulaifications</h5>
                        {jobData.qualifications.map((qual) => (
                          <li>{qual}</li>
                        ))}
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

export default OpenJobDetails;
