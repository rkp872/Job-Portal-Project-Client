import React, { useState } from "react";

const Summary = () => {
  const initialState = {
    name: "",
    city: "",
  };
  const [summary, setSummary] = useState(initialState);
  return (
    <>
      <div>
        <h3 className="summary-heading">
          <span className="fas fa-building m-2"></span>Cerner Corporation
        </h3>
        <p className="summary-para">
          <span className="fas fa-map-marker-alt m-2"></span>Kolkata, West
          Bengal
        </p>
      </div>
      <div>
        <p className="summary-para" style={{ fontStyle: "italic" }}>
          "Tesla, Inc. is an American electric vehicle and clean energy company
          based in Palo Alto, California. Tesla's current products include
          electric cars, battery energy storage from home to grid-scale, solar
          panels and solar roof tiles, as well as other related products and
          services."
        </p>
      </div>
    </>
  );
};

export default Summary;
