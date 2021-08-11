import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../services/SeekerService";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const JobDetails = (props) => {
  const [jobData, setjobData] = useState(props.location.state.jobData);
  const [numOfapplicants, setNumOfapplicants] = useState("");

  useEffect(() => {
    SeekerService.getNumberOfApplicants(jobData.id).then((res) => {
      console.log("Applicants : ", res.data);
      setNumOfapplicants(res.data);
    });
  }, []);
  const applyJob = (id) => {
    SeekerService.applyToJob(id).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div>
        <Navbar />
        <div style={{ backgroundColor: "#e0f7fa", height: "87vh" }}>
          <div className="row ">
            <div className="col-sm-2 mt-5">
              <Sidebar />
            </div>
            <div className="col-sm-10">
              <div className="row ">
                <div className="col-md-10 offset-md-1 ">
                  <div className="card shadow-lg mt-5 ParentCardScrollStyle">
                    <div className="card-body">
                      <div>
                        <h2>{jobData.postedBy.name}</h2>

                        <h3>{jobData.jobTitle}</h3>

                        <h5>{jobData.location}</h5>
                        <h6>Number of applicants : {numOfapplicants}</h6>
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
                      <div className="container text-center">
                        <Link
                          className="btn btn-outline-primary"
                          onClick={() => applyJob(jobData.id)}
                        >
                          Apply
                        </Link>
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

export default JobDetails;
