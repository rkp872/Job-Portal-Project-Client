import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";

const Achievements = () => {
  const initialState = [];
  const [achievement, setAchievement] = useState(initialState);
  const [showAchievementData, setShowAchievementData] = useState("");
  const [showEditForm, setShowEditForm] = useState("none");
  const [formData, setFormData] = useState("");

  useEffect(() => {
    SeekerService.fetchAchievements().then((res) => {
      console.log(res.data);
      setAchievement(res.data);
    });
  }, []);

  const handleSave = () => {
    achievement.push(formData);
    setShowAchievementData("");
    setShowEditForm("none");
    SeekerService.addAchievements(formData).then((res) => {
      console.log(res.data);
    });
  };
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDelete = (id) => {
    let newAchievement = achievement.filter((item) => item.id !== id);
    setAchievement(newAchievement);
    SeekerService.deleteAchievementData(id).then((res) =>
      console.log(res.data)
    );
  };
  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showAchievementData}` }}>
          <ul className="job-ul">
            {achievement.length > 0 ? (
              achievement.map((data) => (
                <li className="job-title">
                  {data.achievements}
                  <Link onClick={() => handleDelete(data.id)}>
                    <span className="mx-2" style={{ color: "#f48fb1" }}>
                      <i className="fas fa-trash"></i>
                    </span>
                  </Link>
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
                setShowAchievementData("none");
                setShowEditForm("");
              }}
            >
              <i className="fas fa-plus fa-sm"></i>
            </Link>
          </div>
        </div>
        <div style={{ display: `${showEditForm}` }}>
          <div>
            <div className="row mt-2">
              <div className="col-md-4 contact-form-label-div">
                <label className="contact-form-label">Achievement</label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  name="achievements"
                  placeholder="Achievement"
                  value={formData.achievements}
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

export default Achievements;
