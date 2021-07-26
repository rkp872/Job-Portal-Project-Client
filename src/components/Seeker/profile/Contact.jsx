import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeekerService from "../../../services/SeekerService";
import Cookies from "js-cookie";

const Contact = () => {
  const [isUpdated, setIsUpdated] = useState("false");
  const [contact, setContact] = useState("");
  const [showContactData, setshowContactData] = useState("");
  const [showContactForm, setShowContactForm] = useState("none");
  const [editBtn, setEditBtn] = useState("");

  useEffect(() => {
    SeekerService.getContact().then((res) => {
      console.log(res);
      if (res.data == "") {
        setContact({ email: JSON.parse(Cookies.get("user")).email });
      } else {
        setContact(res.data);
      }
      console.log(contact);
    });
  }, [isUpdated]);

  const handleFormDataChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    console.log(contact);
    SeekerService.updateContact(contact).then((res) => {
      console.log(res.data);

      setShowContactForm("none");
      setshowContactData("");
      setEditBtn("");
    });
  };

  return (
    <>
      <div className="ScrollStyle">
        <div style={{ display: `${showContactData}` }}>
          <table className="table table-borderless mt-2">
            <tr>
              <th className="contact-th">Email</th>
              <td className="contact-td">{contact.email || "Not Available"}</td>
            </tr>
            <tr>
              <th className="contact-th">Alternate Email</th>
              <td className="contact-td">
                {contact.alternateEmail || "Not Available"}
              </td>
            </tr>
            <tr>
              <th className="contact-th">Phone</th>
              <td className="contact-td">{contact.phone || "Not Available"}</td>
            </tr>
            <tr>
              <th className="contact-th">Home Phone</th>
              <td className="contact-td">
                {contact.homePhone || "Not Available"}
              </td>
            </tr>
            <tr>
              <th className="contact-th">Current Address</th>
              <td className="contact-td">
                {contact.currentAddress || "Not Available"}
              </td>
            </tr>
            <tr>
              <th className="contact-th">Permanent Address</th>
              <td className="contact-td">
                {contact.permanentAddress || "Not Available"}
              </td>
            </tr>

            {contact.facebookProfile ? (
              <span className="ml-2">
                <Link to={contact.facebbokProfile}>
                  <i className="fab fa-facebook-square fa-2x"></i>
                </Link>
              </span>
            ) : (
              ""
            )}

            {contact.linkedInProfile ? (
              <span className="ml-2">
                <Link to={contact.linkedInProfile}>
                  <i className="fab fa-linkedin fa-2x"></i>
                </Link>
              </span>
            ) : (
              ""
            )}
            {contact.githubProfile ? (
              <span className="ml-2">
                <Link to={contact.githubProfile}>
                  <i className="fab fa-github fa-2x"></i>
                </Link>
              </span>
            ) : (
              ""
            )}
          </table>
        </div>
        <div style={{ display: `${showContactForm}` }}>
          <div className="mt-2 text-center" style={{ width: "400px" }}>
            <div className="container mt-1">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
                disabled
                value={contact.email}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="alternateEmail"
                placeholder="Alternate email"
                value={contact.alternateEmail}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="homePhone"
                placeholder="Home Phone"
                value={contact.homePhone}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="currentAddress"
                placeholder="Current Address"
                value={contact.currentAddress}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="permanentAddress"
                placeholder="Permanent Address"
                value={contact.permanentAddress}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="facebookProfile"
                placeholder="Facebook Profile"
                value={contact.facebookProfile}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="linkedInProfile"
                placeholder="LinkedIn"
                value={contact.linkedInProfile}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2">
              <input
                className="form-control"
                type="text"
                name="githubProfile"
                placeholder="Github Profile URL"
                value={contact.githubProfile}
                onChange={(e) => handleFormDataChange(e)}
              />
            </div>
            <div className="container mt-2 mb-2">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={handleFormSubmit}
              >
                <i class="fas fa-check fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ display: `${editBtn}` }}
          className="container text-center mt-2 mb-2"
        >
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={(e) => {
              setshowContactData("none");
              setShowContactForm("");
              setEditBtn("none");
            }}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
