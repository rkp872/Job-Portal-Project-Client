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
  fetchCertificationData() {
    var token = Cookies.get("token");
    return axios.get(`/seeker/get-certification`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  addCertificationData(certification) {
    var token = Cookies.get("token");
    return axios.post("/seeker/add-certification", certification, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteCertificationData(id) {
    var token = Cookies.get("token");
    return axios.get(`/seeker/delete-certification/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  fetchAchievements() {
    var token = Cookies.get("token");
    return axios.get(`/seeker/get-achievements`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  addAchievements(achievement) {
    var token = Cookies.get("token");
    return axios.post("/seeker/add-achievement", achievement, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteAchievementData(id) {
    var token = Cookies.get("token");
    return axios.get(`/seeker/delete-achievement/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  fetchPersonalData() {
    var token = Cookies.get("token");
    return axios.get(`/seeker/get-personal`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  updatePersonalData(personal) {
    var token = Cookies.get("token");
    return axios.post(`/seeker/update-personal`, personal, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  fetchSummary() {
    var token = Cookies.get("token");
    return axios.get(`/seeker/get-summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  updateSummary(summary) {
    var token = Cookies.get("token");
    return axios.post(`/seeker/update-summary`, summary, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  fetchOpenJobs() {
    var token = Cookies.get("token");
    return axios.get("/seeker/get-recommendedjobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  applyToJob(id) {
    var token = Cookies.get("token");
    return axios.get(`/seeker/apply-job/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getNumberOfApplicants(jobId) {
    var token = Cookies.get("token");
    return axios.get(`/seeker/numberof-applicants/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getSelectedJobs() {
    var token = Cookies.get("token");
    return axios.get(`/seeker/selected-jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new SeekerService();
