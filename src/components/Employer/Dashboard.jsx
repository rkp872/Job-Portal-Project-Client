import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cookies from "js-cookie";

const Dashboard = () => {
  let user = JSON.parse(Cookies.get("user"));
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
                <div
                  className="col-md-4 text-center"
                  style={{ marginTop: "50px" }}
                >
                  <h2 className="text-center">{user.name}</h2>
                  <p>
                    Updating profile will let your candidates know you better.It
                    makes a high chance the candidate will apply for job in your
                    organization.This helps you to choose best from a bunch.
                  </p>

                  <Link
                    to="/profile-update"
                    className="side-link btn btn-outline-primary"
                  >
                    Update Profile
                  </Link>
                  <h5
                    className="mt-5 "
                    style={{ fontStyle: "italic", color: "GrayText" }}
                  >
                    We are known as global leader in helping firms recruit best
                    candidate for the post
                  </h5>
                </div>
                <div className="col-md-8">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
                    alt=""
                    className="home-image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <p style={{ fontWeight: "bold" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis earum sunt iusto accusantium cumque sint officia
                    suscipit in, quidem dolorum dolore error eaque nulla culpa
                    consequuntur molestias commodi, tempora nostrum. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Nobis quas
                    mollitia ducimus similique maxime pariatur ex neque eligendi
                    quidem ipsa nihil, quaerat minus non deleniti rerum? Rem sed
                    fuga veritatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
