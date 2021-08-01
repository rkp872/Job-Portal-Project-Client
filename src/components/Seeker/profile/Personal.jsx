import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";

const Personal = () => {
  const initialState = {};
  const [personal, setPersonal] = useState(initialState);
  const [showPersonalData, setShowPersonalData] = useState("");
  const [showEditForm, setShowEditForm] = useState("none");
  const handleFormDataChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    SeekerService.fetchPersonalData().then((res) => {
      console.log(res);
      if (res.data != "") {
        setPersonal(res.data);
      }
    });
  }, []);
  const handleFormSubmit = () => {
    setShowEditForm("none");
    setShowPersonalData("");
    SeekerService.updatePersonalData(personal).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showPersonalData}` }}>
          <div className="mt-2">
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Father's Name</th>
                <td className="contact-td">
                  {personal.fatherName || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">Mother's Name</th>
                <td className="contact-td">
                  {personal.motherName || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">Date of Birth</th>
                <td className="contact-td">
                  {personal.dob || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">Language Known</th>
                <td className="contact-td">
                  {personal.languageKnown || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">Hobby</th>
                <td className="contact-td">
                  {personal.hobby || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">Relocation</th>
                <td className="contact-td">
                  {personal.relocation || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">Aadhar Number</th>
                <td className="contact-td">
                  {personal.aadharNumber || "Not Available"}
                </td>
              </tr>
              <tr>
                <th className="contact-th">PAN Number</th>
                <td className="contact-td">
                  {personal.panNumber || "Not Available"}
                </td>
              </tr>
            </table>
            <div className="container text-center">
              <Link
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  setShowPersonalData("none");
                  setShowEditForm("");
                }}
              >
                <i className="fas fa-pencil-alt"></i>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: `${showEditForm}` }}>
          <div className="my-2 mx-3 ">
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Father's Name</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="fatherName"
                  placeholder="Father's Name"
                  value={personal.fatherName}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Mother's Name</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="motherName"
                  placeholder="Mother's Name"
                  value={personal.motherName}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Date of Birth</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="dob"
                  placeholder="Date of Birth"
                  value={personal.dob}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">
                  Language Known Separated by Comma (,)
                </label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="languageKnown"
                  placeholder="Languages Known (Comma Separated)"
                  value={personal.languageKnown}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Your Hobby</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="hobby"
                  placeholder="Your Hobby"
                  value={personal.hobby}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Relocation Choice</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="relocation"
                  placeholder="Relocation choice"
                  value={personal.relocation}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Aadhar Number</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="aadharNumber"
                  placeholder="Aadhar Number"
                  value={personal.aadharNumber}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">PAN Number</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="panNumber"
                  placeholder="PAN Number"
                  value={personal.panNumber}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="container mt-2 mb-2  text-center">
              <button
                className="btn btn-sm btn-outline-success"
                onClick={handleFormSubmit}
              >
                <i class="fas fa-check fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
