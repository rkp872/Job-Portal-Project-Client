import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployerService from "../../services/EmployerService";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router";

const ApplicantProfile = (props) => {
  const history = useHistory();
  const [profileData, setProfileData] = useState(
    props.location.state.profileData
  );
  const [jobId, setJobId] = useState(props.location.state.jobId);
  //useEffect(() => {}, [profileData]);
  const selectCandidateHandler = (e) => {
    e.preventDefault();
    console.log("jobId : ", jobId);
    console.log("profileData.user.id : ", profileData.user.id);

    EmployerService.selectCandidate(jobId, profileData.user.id).then((res) => {
      console.log(res.data);
      alert(res.data);
      // history.push({
      //   pathname: "/employer-applicant-profile",
      //   state: {
      //     profileData: profileData,
      //     jobId: jobId,
      //   },
      // });
    });
  };
  return (
    <>
      <div>
        {console.log("loaded")}
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
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src={profileData.user.picture}
                            alt=""
                            className="profile-image"
                          />
                          {profileData.seekerSummary ? (
                            <div className="text-center">
                              <span className="contact-td">
                                {profileData.seekerSummary.currentStatus || ""}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="text-center my-3 ">
                            {profileData.seekerContact.facebookProfile ? (
                              <span className=" mx-2">
                                <Link
                                  to={profileData.seekerContact.facebookProfile}
                                >
                                  <i className="fab fa-facebook-square fa-2x"></i>
                                </Link>
                              </span>
                            ) : (
                              ""
                            )}
                            {profileData.seekerContact.linkedInProfile ? (
                              <span className="mx-2 ">
                                <Link
                                  to={profileData.seekerContact.linkedInProfile}
                                >
                                  <i className="fab fa-linkedin  fa-2x"></i>
                                </Link>
                              </span>
                            ) : (
                              ""
                            )}
                            {profileData.seekerContact.githubProfile ? (
                              <span className="mx-2">
                                <Link
                                  to={profileData.seekerContact.githubProfiles}
                                >
                                  <i className="fab fa-github fa-2x"></i>
                                </Link>
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-md-9 ">
                          <div>
                            <h1 className="contact-th ">
                              {profileData.user.name}
                            </h1>
                            <span className="contact-td ">
                              {profileData.seekerSummary
                                ? profileData.seekerSummary.currentCity
                                : "Not Available"}
                            </span>
                            <br />
                            <span className="contact-td">
                              {profileData.user.email}
                            </span>
                          </div>
                          <hr />
                          {profileData.seekerContact ? (
                            <div>
                              <h2 className="contact-th">Contact Details</h2>
                              <table className="table table-borderless mt-2">
                                <tr>
                                  <th className="contact-th">AlternateEmail</th>
                                  <td className="contact-td">
                                    {profileData.seekerContact.alternateEmail ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Phone</th>
                                  <td className="contact-td">
                                    {profileData.seekerContact.phone ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Home Phone</th>
                                  <td className="contact-td">
                                    {profileData.seekerContact.homePhone ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">
                                    Current Address
                                  </th>
                                  <td className="contact-td">
                                    {profileData.seekerContact.currentAddress ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">
                                    Permanent Address
                                  </th>
                                  <td className="contact-td">
                                    {profileData.seekerContact
                                      .permanentAddress || "Not Available"}
                                  </td>
                                </tr>
                              </table>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        {profileData.seekerProfessional ? (
                          <div className="col-md-6">
                            <h2 className="contact-th">Professionals</h2>
                            <ul className="job-ul">
                              {profileData.seekerProfessional.length > 0 ? (
                                profileData.seekerProfessional.map((data) => (
                                  <li>
                                    <table className="table table-borderless">
                                      <tr>
                                        <th className="contact-th">Duration</th>
                                        <td className="contact-td">
                                          {data.duration}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="contact-th">Role</th>
                                        <td className="contact-td">
                                          {data.role}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="contact-th">Location</th>
                                        <td className="contact-td">
                                          {data.location}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="contact-th">
                                          Description
                                        </th>
                                        <td className="contact-td">
                                          {data.description}
                                        </td>
                                      </tr>
                                    </table>
                                  </li>
                                ))
                              ) : (
                                <h1
                                  className="text-center"
                                  style={{
                                    color: "GrayText",
                                  }}
                                >
                                  Not Available
                                </h1>
                              )}
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                        {profileData.seekerCertification ? (
                          <div className="col-md-6">
                            <h2 className="contact-th">Certifications</h2>
                            <ul className="job-ul">
                              {profileData.seekerCertification.length > 0 ? (
                                profileData.seekerCertification.map((data) => (
                                  <li>
                                    <span className="job-title">
                                      {data.certTitle}
                                    </span>
                                    <table className="table table-borderless">
                                      <tr>
                                        <th className="contact-th">Issuer</th>
                                        <td className="contact-td">
                                          {data.issuer}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="contact-th">Date</th>
                                        <td className="contact-td">
                                          {data.date}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="contact-th">
                                          Description
                                        </th>
                                        <td className="contact-td">
                                          {data.description}
                                        </td>
                                      </tr>
                                    </table>
                                  </li>
                                ))
                              ) : (
                                <h1
                                  className="text-center"
                                  style={{
                                    color: "GrayText",
                                  }}
                                >
                                  Not Available
                                </h1>
                              )}
                            </ul>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <hr />
                      <div className="row">
                        {profileData.seekerEducation ? (
                          <div className="col-md-10 offset-md-1">
                            <h2 className="contact-th">
                              Educational Qualifications
                            </h2>
                            <div className="text-center">
                              {profileData.seekerEducation.length > 0 ? (
                                <table className="table  mt-2 text-center">
                                  <thead>
                                    <th className="contact-th">Degree</th>
                                    <th className="contact-th">
                                      Specialization
                                    </th>
                                    <th className="contact-th">
                                      Board/University
                                    </th>
                                    <th className="contact-th">Year</th>
                                    <th className="contact-th">Percentage</th>
                                  </thead>
                                  {profileData.seekerEducation.map((data) => (
                                    <tr>
                                      <td className="contact-td">
                                        {data.degree}
                                      </td>
                                      <td className="contact-td">
                                        {data.specialization}
                                      </td>
                                      <td className="contact-td">
                                        {data.university}
                                      </td>
                                      <td className="contact-td">
                                        {data.year}
                                      </td>
                                      <td className="contact-td">
                                        {data.percentage}
                                      </td>
                                    </tr>
                                  ))}
                                </table>
                              ) : (
                                <h1
                                  className="text-center"
                                  style={{
                                    color: "GrayText",
                                  }}
                                >
                                  Not Available
                                </h1>
                              )}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <hr />
                        <div className="row">
                          {profileData.seekerAchievment ? (
                            <div className="col-md-6">
                              <h2 className="contact-th">Achievements</h2>
                              <ul className="job-ul">
                                {profileData.seekerAchievment.length > 0 ? (
                                  profileData.seekerAchievment.map((data) => (
                                    <li className="job-title">
                                      {data.achievements}
                                    </li>
                                  ))
                                ) : (
                                  <h1
                                    className="text-center"
                                    style={{
                                      color: "GrayText",
                                    }}
                                  >
                                    Not Available
                                  </h1>
                                )}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="col-md-6">
                            <h2 className="contact-th">Personal Information</h2>
                            {profileData.seekerPersonal ? (
                              <table className="table table-borderless">
                                <tr>
                                  <th className="contact-th">Father's Name</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.fatherName ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Mother's Name</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.motherName ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Date of Birth</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.dob ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Language Known</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.languageKnown ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Hobby</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.hobby ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Relocation</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.relocation ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">Aadhar Number</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.aadharNumber ||
                                      "Not Available"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="contact-th">PAN Number</th>
                                  <td className="contact-td">
                                    {profileData.seekerPersonal.panNumber ||
                                      "Not Available"}
                                  </td>
                                </tr>
                              </table>
                            ) : (
                              <h1
                                className="text-center"
                                style={{
                                  color: "GrayText",
                                }}
                              >
                                Not Available
                              </h1>
                            )}
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="container text-center">
                        <Link className="btn btn-outline-primary mx-2">
                          Query to Candidate
                        </Link>
                        <Link
                          onClick={(e) => selectCandidateHandler(e)}
                          className="btn btn-outline-primary mx-2"
                        >
                          Select For Next Round
                        </Link>
                        <Link className="btn btn-outline-primary mx-2">
                          Save Candidate
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

export default ApplicantProfile;
