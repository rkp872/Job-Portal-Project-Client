import React from "react";
import { Link } from "react-router-dom";

const Personal = () => {
  return (
    <>
      <div className="mt-2">
        <table className="table table-borderless">
          <tr>
            <th className="contact-th">Father's Name</th>
            <td className="contact-td">Govind Pandey</td>
          </tr>
          <tr>
            <th className="contact-th">Mother's Name</th>
            <td className="contact-td">Ram Rati Devi</td>
          </tr>
          <tr>
            <th className="contact-th">Date of Birth</th>
            <td className="contact-td">20th March 1999</td>
          </tr>
          <tr>
            <th className="contact-th">Language Known</th>
            <td className="contact-td">English,Hindi,Bangla</td>
          </tr>
          <tr>
            <th className="contact-th">Hobby</th>
            <td className="contact-td">Play Cricket</td>
          </tr>
          <tr>
            <th className="contact-th">Relocation</th>
            <td className="contact-td">Yes</td>
          </tr>
          <tr>
            <th className="contact-th">Aadhar Number</th>
            <td className="contact-td">945528562182</td>
          </tr>
          <tr>
            <th className="contact-th">PAN Number</th>
            <td className="contact-td">FYAPP1747J</td>
          </tr>
        </table>
        <div className="container text-center">
          <Link className="btn btn-sm btn-outline-primary">
            <i className="fas fa-pencil-alt"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Personal;
