import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <div className="text-center">
        <table className="table  mt-2 text-center">
          <thead>
            <th>Degree</th>
            <th>Specialization</th>
            <th>Board/University</th>
            <th>Year</th>
            <th>Percentage</th>
          </thead>
          <tr>
            <td>Graduation</td>
            <td>CSE</td>
            <td>MAKAUT</td>
            <td>2021</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>Graduation</td>
            <td>CSE</td>
            <td>MAKAUT</td>
            <td>2021</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>Graduation</td>
            <td>CSE</td>
            <td>MAKAUT</td>
            <td>2021</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>Graduation</td>
            <td>CSE</td>
            <td>MAKAUT</td>
            <td>2021</td>
            <td>95%</td>
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

export default Education;
