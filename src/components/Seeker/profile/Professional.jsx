import React from "react";
import { Link } from "react-router-dom";

const Professional = () => {
  return (
    <>
      <div className="ScrollStyle">
        <ul className="job-ul">
          <li>
            <span className="job-title">Intern at Persistent Systems</span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Duration</th>
                <td className="contact-td">6 months</td>
              </tr>
              <tr>
                <th className="contact-th">Role</th>
                <td className="contact-td">Backend Engineer</td>
              </tr>
              <tr>
                <th className="contact-th">Location</th>
                <td className="contact-td">Pune, Maharashtra</td>
              </tr>
              <tr>
                <th className="contact-th">Description</th>
                <td className="contact-td">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam
                </td>
              </tr>
            </table>
          </li>
          <li>
            <span className="job-title">Software Engineer at EPAM </span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Duration</th>
                <td className="contact-td">1 Year</td>
              </tr>
              <tr>
                <th className="contact-th">Role</th>
                <td className="contact-td">Full stack developer</td>
              </tr>
              <tr>
                <th className="contact-th">Location</th>
                <td className="contact-td">Pune, Maharashtra</td>
              </tr>
              <tr>
                <th className="contact-th">Description</th>
                <td className="contact-td">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam
                </td>
              </tr>
            </table>
          </li>
          <li>
            <span className="job-title">Software Engineer at EPAM </span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Duration</th>
                <td className="contact-td">1 Year</td>
              </tr>
              <tr>
                <th className="contact-th">Role</th>
                <td className="contact-td">Full stack developer</td>
              </tr>
              <tr>
                <th className="contact-th">Location</th>
                <td className="contact-td">Pune, Maharashtra</td>
              </tr>
              <tr>
                <th className="contact-th">Description</th>
                <td className="contact-td">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam
                </td>
              </tr>
            </table>
          </li>
          <li>
            <span className="job-title">Software Engineer at EPAM </span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Duration</th>
                <td className="contact-td">1 Year</td>
              </tr>
              <tr>
                <th className="contact-th">Role</th>
                <td className="contact-td">Full stack developer</td>
              </tr>
              <tr>
                <th className="contact-th">Location</th>
                <td className="contact-td">Pune, Maharashtra</td>
              </tr>
              <tr>
                <th className="contact-th">Description</th>
                <td className="contact-td">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam
                </td>
              </tr>
            </table>
          </li>
        </ul>
        <div className="container text-center">
          <Link className="btn btn-sm btn-outline-primary">
            <i className="fas fa-pencil-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Professional;
