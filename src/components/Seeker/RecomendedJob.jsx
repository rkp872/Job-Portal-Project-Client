import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pagination from "./../../files/Pagination_1";
import SeekerService from "../../services/SeekerService";
import { Link } from "react-router-dom";

const RecomendedJob = () => {
  const [openJobs, setOpenJobs] = useState("");
  useEffect(() => {
    SeekerService.fetchOpenJobs().then((res) => {
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
              <div className="row ">
                <div className="col-md-10 offset-md-1">
                  <div className="card shadow-lg mt-5">
                    <div className="card-header bg-primary text-white">
                      <h2 className="text-center">Jobs Recommended For You</h2>
                    </div>
                    <div className="card-body">
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
                                      pathname: "/seeker-openjobs-details",
                                      state: { jobData: data },
                                    }}
                                  >
                                    <div className="card">
                                      <div className="card-body">
                                        <h3>{data.postedBy.name}</h3>
                                        <h5>{data.jobTitle}</h5>
                                        <h6>{data.location}</h6>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))
                          ) : (
                            <h2 className="text-center">
                              No Job Available For You
                            </h2>
                          )}
                        </div>

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

export default RecomendedJob;
