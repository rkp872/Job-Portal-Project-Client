import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";

const Professional = () => {
  var initialState = [];
  const [professional, setProfessional] = useState(initialState);
  const [showProfessionalData, setshowProfessionalData] = useState("");
  const [showEditBtn, setShowEditBtn] = useState("");
  const [showEditForm, setShowEditForm] = useState("none");
  const [formData, setFormData] = useState("");
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fetchProfessionalData = () => {};
  useEffect(() => {
    SeekerService.fetchProfessionalData().then((res) => {
      console.log(res.data);
      setProfessional(res.data);
    });
  }, []);
  const handleSave = () => {
    professional.push(formData);
    console.log("formData : ", formData);
    console.log("professional : ", professional);
    SeekerService.saveProfessionalData(formData).then((res) => {
      console.log(res.data);
    });

    setshowProfessionalData("");
    setShowEditForm("none");
  };
  const handleDelete = (id) => {
    const newProfessionalData = professional.filter((item) => item.id !== id);
    setProfessional(newProfessionalData);
    SeekerService.deleteProfessionalData(id).then((res) =>
      console.log(res.data)
    );
  };
  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showProfessionalData}` }}>
          <ul className="job-ul">
            {professional.length > 0 ? (
              professional.map((data) => (
                <li>
                  <span className="job-title">{data.jobTitle}</span>
                  <Link onClick={() => handleDelete(data.id)}>
                    <span className="mx-2" style={{ color: "#f48fb1" }}>
                      <i className="fas fa-trash"></i>
                    </span>
                  </Link>
                  <table className="table table-borderless">
                    <tr>
                      <th className="contact-th">Duration</th>
                      <td className="contact-td">{data.duration}</td>
                    </tr>
                    <tr>
                      <th className="contact-th">Role</th>
                      <td className="contact-td">{data.role}</td>
                    </tr>
                    <tr>
                      <th className="contact-th">Location</th>
                      <td className="contact-td">{data.location}</td>
                    </tr>
                    <tr>
                      <th className="contact-th">Description</th>
                      <td className="contact-td">{data.description}</td>
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
          <div className="container text-center">
            <Link
              className="btn btn-sm btn-outline-primary"
              onClick={() => {
                setshowProfessionalData("none");
                setShowEditForm("");
              }}
            >
              <i className="fas fa-plus fa-sm"></i>
            </Link>
          </div>
        </div>
        <div style={{ display: `${showEditForm}`, width: "45vw" }}>
          <div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">
                  Job Title and Company
                </label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Duration</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={formData.duration}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Role</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={formData.role}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Location</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Description</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="container text-center">
              <button
                className="btn btn-outline-success m-2"
                onClick={handleSave}
              >
                <i className="fas fa-check fa-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Professional;
