import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import EmployerService from "../../services/EmployerService";
import { Link } from "react-router-dom";

const OpenJobs = () => {
  const [openJobs, setOpenJobs] = useState("");
  useEffect(() => {
    EmployerService.fetchOpenJobs().then((res) => {
      console.log(res.data);
      setOpenJobs(res.data);
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
                  <div className="card ParentCardScrollStyle  shadow-lg mt-5">
                    <div className="card-body">
                      <div>
                        <div class="row row-cols-4">
                          {openJobs ? (
                            openJobs.map((data) => (
                              <div class="col my-2">
                                <Link
                                  style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                  }}
                                >
                                  <div className="card">
                                    <div className="card-body">
                                      <h4>{data.jobTitle}</h4>
                                      <h6>{data.location}</h6>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))
                          ) : (
                            <h2 className="text-center">
                              No Job Opened By You
                            </h2>
                          )}
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

export default OpenJobs;
