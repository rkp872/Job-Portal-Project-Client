import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_contents">
          <h6>
            {new Date().getFullYear()} Copyright &copy; www.CareerCare.com All
            rights reserved!
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
