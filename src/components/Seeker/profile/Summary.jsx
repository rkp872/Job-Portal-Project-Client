import React from "react";

const Summary = () => {
  return (
    <>
      <div>
        <h3 className="summary-heading justify-content-space-between">
          <i className="fas fa-briefcase fa-sm"></i>
          <span className="m-3">Software Engineer At Persistent Systems</span>
        </h3>
        <p className="summary-para">
          <i className="fas fa-map-marker-alt"></i>
          <span className="m-2">Pune, Maharashtra</span>
        </p>
      </div>
      <div>
        <p className="summary-para" style={{ fontStyle: "italic" }}>
          "Software Engineer Working in the information technology and services
          industry. Skilled in full stack development with bachelor in
          technology degree focused in computer science and engineering"
        </p>
      </div>
    </>
  );
};

export default Summary;
