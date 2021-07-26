import React from "react";
import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <>
      <div className="mt-2">
        <ul className="job-ul">
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
          <li className="job-title">Participated in the Honor Society</li>
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

export default Achievements;
