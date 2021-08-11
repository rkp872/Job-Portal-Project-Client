import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../services/SeekerService";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pagination from "./../../files/Pagination";

const SelectedJobs = () => {
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  const [selectedJobs, setSelectedJobs] = useState("");
  useEffect(() => {
    SeekerService.getSelectedJobs().then((res) => {
      console.log(res.data);
      setSelectedJobs(res.data);
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
                        {selectedJobs.length > 0 ? (
                          <table className="table table-borderless text-center">
                            <thead>
                              <th className="contact-th">Company</th>
                              <th className="contact-th">Job Title</th>
                              <th className="contact-th">Location</th>
                              <th className="contact-th">Message</th>
                            </thead>
                            {selectedJobs
                              .slice(pagination.start, pagination.end)
                              .map((data) => (
                                <tr>
                                  <th className="contact-th">
                                    <Link style={{ textDecoration: "none" }}>
                                      {data.postedBy.name}
                                    </Link>
                                  </th>
                                  <td className="contact-td">
                                    {data.jobTitle}
                                  </td>
                                  <td className="contact-td">
                                    {data.location}
                                  </td>
                                  <td className="contact-td">
                                    Selected For next round
                                  </td>
                                </tr>
                              ))}
                          </table>
                        ) : (
                          <span className="contact-td ">Not Available</span>
                        )}
                        <Pagination
                          showPerPage={showPerPage}
                          onPaginationChange={onPaginationChange}
                          total={selectedJobs.length}
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

export default SelectedJobs;
