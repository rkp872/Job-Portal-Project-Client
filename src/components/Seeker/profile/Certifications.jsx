import React from "react";
import { Link } from "react-router-dom";

const Certifications = () => {
  return (
    <>
      <div className="ScrollStyle">
        <ul className="job-ul">
          <li>
            <span className="job-title">Java Progranning</span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Issuer</th>
                <td className="contact-td">Oracle</td>
              </tr>
              <tr>
                <th className="contact-th">Date</th>
                <td className="contact-td">14th June 2019</td>
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
            <span className="job-title">Python Developer </span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Issuer</th>
                <td className="contact-td">Microsoft</td>
              </tr>
              <tr>
                <th className="contact-th">Date</th>
                <td className="contact-td">16 July 2020</td>
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
            <span className="job-title">Python Developer </span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Issuer</th>
                <td className="contact-td">Microsoft</td>
              </tr>
              <tr>
                <th className="contact-th">Date</th>
                <td className="contact-td">16 July 2020</td>
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
            <span className="job-title">Python Developer </span>
            <table className="table table-borderless">
              <tr>
                <th className="contact-th">Issuer</th>
                <td className="contact-td">Microsoft</td>
              </tr>
              <tr>
                <th className="contact-th">Date</th>
                <td className="contact-td">16 July 2020</td>
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

export default Certifications;
