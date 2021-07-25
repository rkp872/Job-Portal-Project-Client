import React, { useState } from "react";
import UserService from "../../services/UserService";
import Navbar from "./Navbar";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const handeChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    UserService.registerUser(user).then((res) => {
      history.push({
        pathname: "/login",
        message: res.data,
      });
    });
  };
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#e0f7fa", height: "87vh" }}>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow-lg mt-4">
              <div className="card-body">
                <h2 className="text-center">Register Here</h2>
                <hr />
                <div className="row">
                  <div className="col-md-5">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="role"
                      onChange={(e) => {
                        handeChange(e);
                      }}
                    >
                      <option selected disabled>
                        You Are
                      </option>
                      <option value="EMPLOYER">Employer</option>
                      <option value="SEEKER">Job Seeker</option>
                    </select>
                  </div>
                </div>
                {user.role ? (
                  <>
                    <div className="mt-2">
                      <label htmlFor="name" className="form-label">
                        {user.role == "EMPLOYER" ? "Your Company Name" : "Name"}
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={(e) => {
                          handeChange(e);
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={(e) => {
                          handeChange(e);
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={(e) => {
                          handeChange(e);
                        }}
                      />
                    </div>

                    <div className="container text-center mt-2">
                      <button
                        className="btn btn-outline-primary "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
