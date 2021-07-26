import axios from "axios";
import Cookies from "js-cookie";
class SeekerService {
  getContact() {
    var token = Cookies.get("token");
    console.log("token  : ", token);
    return axios.get("/seeker/get-contact", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateContact(contact) {
    var token = Cookies.get("token");
    return axios.post("/seeker/update-contact", contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  fetchProfessionalData() {
    var token = Cookies.get("token");
    return axios.get("/seeker/get-professional", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  saveProfessionalData(professional) {
    var token = Cookies.get("token");
    return axios.post("/seeker/add-professional", professional, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteProfessionalData(id) {
    var token = Cookies.get("token");
    return axios.get(`/seeker/delete-professional/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  fetchEducationData() {
    var token = Cookies.get("token");
    return axios.get(`/seeker/get-education`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addEducationData(education) {
    var token = Cookies.get("token");
    return axios.post("/seeker/add-education", education, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteEducationData(id) {
    var token = Cookies.get("token");
    return axios.get(`/seeker/delete-education/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new SeekerService();
