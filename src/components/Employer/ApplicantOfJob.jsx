import React, { useEffect, useState } from "react";
import EmployerService from "../../services/EmployerService";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pagination from "./../../files/Pagination";
import { Link } from "react-router-dom";

const ApplicantOfJob = (props) => {
  const [jobId, setjobId] = useState(props.location.state.jobId);
  const [applicantsList, setApplicantsList] = useState("");
  useEffect(() => {
    EmployerService.getApplicantsOfJob(jobId).then((res) => {
      console.log(res.data);
      setApplicantsList(res.data);
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
                  <div className="card shadow-lg mt-5 ParentCardScrollStyle">
                    <div className="card-body">
                      <div>
                        <div>
                          {applicantsList ? (
                            <table className="table table-borderless">
                              <thead>
                                <th className="contact-th">Name</th>
                                <th className="contact-th">Email</th>
                                <th className="contact-th">City</th>
                                <th className="contact-th">Current Status</th>
                              </thead>
                              {applicantsList
                                .slice(pagination.start, pagination.end)
                                .map((data) => (
                                  <tr>
                                    <th className="contact-th">
                                      <Link
                                        to={{
                                          pathname:
                                            "/employer-applicant-profile",
                                          state: {
                                            profileData: data,
                                            jobId: jobId,
                                          },
                                        }}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {data.user.name}
                                      </Link>
                                    </th>
                                    <td className="contact-td">
                                      {data.user.email}
                                    </td>
                                    <td className="contact-td">
                                      {data.seekerSummary
                                        ? data.seekerSummary.currentCity
                                        : "NA"}
                                    </td>
                                    <td className="contact-td">
                                      {data.seekerSummary
                                        ? data.seekerSummary.currentStatus
                                        : "NA"}
                                    </td>
                                  </tr>
                                ))}
                            </table>
                          ) : (
                            <h2 className="text-center">Not Available</h2>
                          )}

                          <hr />
                          <Pagination
                            showPerPage={showPerPage}
                            onPaginationChange={onPaginationChange}
                            total={applicantsList.length}
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
      </div>
    </>
  );
};

export default ApplicantOfJob;
