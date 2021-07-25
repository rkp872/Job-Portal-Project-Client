import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, useHistory } from "react-router";
import UserService from "../../services/UserService";
import Cookies from "js-cookie";

const Login = () => {
  let location = useLocation();
  let history = useHistory();
  const [message, setMessage] = useState(location.message);
  const [user, setUser] = useState({});
  const handeChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    UserService.loginUser(user)
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 7 });
        let user = res.data.user;

        Cookies.set("user", JSON.stringify(user), { expires: 7 });
        //Cookies.set("user", res.data.user, { expires: 7 });
        if (res.data.user.role == "SEEKER") {
          history.push({
            pathname: "/seeker-dashboard",
          });
        } else if (res.data.user.role == "EMPLOYER") {
          history.push({
            pathname: "/employer-dashboard",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          setMessage(err.response.data);
        } else {
          setMessage({
            message: "Server Error Try After Sometime!!",
            type: "danger",
          });
        }
        console.log(message);
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
                {message ? (
                  <h5 className={` text-center alert alert-${message.type}`}>
                    {message.message}
                  </h5>
                ) : (
                  ""
                )}
                <h2 className="text-center">Login Here</h2>
                <hr />

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
