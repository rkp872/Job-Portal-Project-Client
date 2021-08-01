import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";

const Summary = () => {
  const initialState = {};
  const [summary, setSummary] = useState(initialState);
  const [showSummary, setShowSummary] = useState("");
  const [showEditForm, setShowEditForm] = useState("none");
  const handleFormDataChange = (e) => {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    setShowEditForm("none");
    setShowSummary("");
    SeekerService.updateSummary(summary).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    SeekerService.fetchSummary().then((res) => {
      console.log(res.data);
      setSummary(res.data);
    });
  }, []);
  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showSummary}` }}>
          <div>
            <h3 className="summary-heading justify-content-space-between">
              <i className="fas fa-briefcase fa-sm"></i>
              <span className="m-3">
                {summary.currentStatus || "Not Available"}
              </span>
            </h3>
            <p className="summary-para">
              <i className="fas fa-map-marker-alt"></i>
              <span className="m-2">
                {summary.currentCity || "Not Available"}
              </span>
            </p>
          </div>
          <div>
            <p className="summary-para" style={{ fontStyle: "italic" }}>
              "{summary.about || "Not Available"}"
            </p>
          </div>
          <div className="container text-center">
            <Link
              className="btn btn-sm btn-outline-primary"
              onClick={() => {
                setShowSummary("none");
                setShowEditForm("");
              }}
            >
              <i className="fas fa-pencil-alt"></i>
            </Link>
          </div>
        </div>
        <div style={{ display: `${showEditForm}` }}>
          <div className="my-2 mx-3 ">
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Current Status</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="currentStatus"
                  placeholder="Current Status"
                  value={summary.currentStatus}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Current City</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="currentCity"
                  placeholder="Current City"
                  value={summary.currentCity}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">About</label>
              </div>
              <div className="col-md-8">
                <textarea
                  className="form-control"
                  type="text"
                  name="about"
                  rows="4"
                  placeholder="About"
                  value={summary.about}
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

export default Summary;
