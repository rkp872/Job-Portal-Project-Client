import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";

const Certifications = () => {
  const initialState = [];
  const [certifications, setCertifications] = useState(initialState);
  const [showCertifications, setShowCertifications] = useState("");
  const [showAddForm, setShowAddForm] = useState("none");
  const [formData, setFormData] = useState("");

  useEffect(() => {
    SeekerService.fetchCertificationData().then((res) => {
      console.log(res.data);
      setCertifications(res.data);
    });
  }, []);

  const handleSave = () => {
    certifications.push(formData);
    setShowAddForm("none");
    setShowCertifications("");
    SeekerService.addCertificationData(formData).then((res) =>
      console.log(res.data)
    );
  };
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDelete = (id) => {
    const newCertificationsData = certifications.filter(
      (item) => item.id !== id
    );
    setCertifications(newCertificationsData);
    SeekerService.deleteCertificationData(id).then((res) =>
      console.log(res.data)
    );
  };
  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showCertifications}` }}>
          <ul className="job-ul">
            {certifications.length > 0 ? (
              certifications.map((data) => (
                <li>
                  <span className="job-title">{data.certTitle}</span>
                  <Link onClick={() => handleDelete(data.id)}>
                    <span className="mx-2" style={{ color: "#f48fb1" }}>
                      <i className="fas fa-trash"></i>
                    </span>
                  </Link>
                  <table className="table table-borderless">
                    <tr>
                      <th className="contact-th">Issuer</th>
                      <td className="contact-td">{data.issuer}</td>
                    </tr>
                    <tr>
                      <th className="contact-th">Date</th>
                      <td className="contact-td">{data.date}</td>
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
                setShowCertifications("none");
                setShowAddForm("");
              }}
            >
              <i className="fas fa-plus fa-sm"></i>
            </Link>
          </div>
        </div>
        <div style={{ display: `${showAddForm}`, width: "45vw" }}>
          <div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Certificate Title</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="certTitle"
                  placeholder="Certificate Title"
                  value={formData.certTitle}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Issuer</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="issuer"
                  placeholder="Issuer"
                  value={formData.issuer}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Date of Issue</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  value={formData.date}
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
                  value={formData.description}
                  placeholder="Description"
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
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
    </>
  );
};

export default Certifications;
