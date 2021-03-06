import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import EmployerService from "../../services/EmployerService";
import { Link } from "react-router-dom";
import Pagination from "../../files/Pagination";

const OpenJobs = () => {
  const [openJobs, setOpenJobs] = useState("");
  useEffect(() => {
    EmployerService.fetchOpenJobs().then((res) => {
      console.log(res.data);
      setOpenJobs(res.data);
    });
  }, []);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
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
                      <h2 className="text-center">Jobs Opened By You</h2>
                      <hr />
                      <div>
                        <div class="row row-cols-4">
                          {openJobs ? (
                            openJobs
                              .slice(pagination.start, pagination.end)
                              .map((data) => (
                                <div class="col my-2">
                                  <Link
                                    style={{
                                      color: "inherit",
                                      textDecoration: "none",
                                    }}
                                    to={{
                                      pathname: "/employer-openjobs-details",
                                      state: { jobData: data },
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
                        <hr />
                        <Pagination
                          showPerPage={showPerPage}
                          onPaginationChange={onPaginationChange}
                          total={openJobs.length}
                        />
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
