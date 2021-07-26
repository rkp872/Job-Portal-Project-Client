import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";

const Education = () => {
  const initialState = [];
  const [education, setEducation] = useState(initialState);
  const [showEducationData, setShowEducationData] = useState("");
  const [showAddForm, setShowAddForm] = useState("none");
  const [formData, setFormData] = useState("");
  const handleDelete = (id) => {
    const newEducationData = education.filter((item) => item.id !== id);
    setEducation(newEducationData);
    SeekerService.deleteEducationData(id).then((res) => {
      console.log(res.data);
    });
  };
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setShowAddForm("none");
    setShowEducationData("");
    education.push(formData);
    SeekerService.addEducationData(formData).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    SeekerService.fetchEducationData().then((res) => {
      setEducation(res.data);
    });
  }, []);
  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showEducationData}` }}>
          <div className="text-center">
            {education.length > 0 ? (
              <table className="table  mt-2 text-center">
                <thead>
                  <th className="contact-th">Degree</th>
                  <th className="contact-th">Specialization</th>
                  <th className="contact-th">Board/University</th>
                  <th className="contact-th">Year</th>
                  <th className="contact-th">Percentage</th>
                </thead>
                {education.map((data) => (
                  <tr>
                    <td className="contact-td">{data.degree}</td>
                    <td className="contact-td">{data.specialization}</td>
                    <td className="contact-td">{data.university}</td>
                    <td className="contact-td">{data.year}</td>
                    <td className="contact-td">
                      {data.percentage}
                      <Link onClick={() => handleDelete(data.id)}>
                        <span className="mx-2" style={{ color: "#f48fb1" }}>
                          <i className="fas fa-trash"></i>
                        </span>
                      </Link>
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

            <div className="container text-center">
              <Link
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  setShowEducationData("none");
                  setShowAddForm("");
                }}
              >
                <i className="fas fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: `${showAddForm}` }}>
          <div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Degree</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={formData.degree}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Specialization</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="specialization"
                  placeholder="Specialization"
                  value={formData.specialization}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Board / University</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="university"
                  placeholder="Board / University"
                  value={formData.university}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Year</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Percentage</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="percentage"
                  placeholder="Percentage"
                  value={formData.percentage}
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

export default Education;
