import axios from "axios";
import Cookies from "js-cookie";
class EmployerService {
  addNewJob(jobDesc) {
    var token = Cookies.get("token");
    return axios.post("/employer/add-newjob", jobDesc, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  fetchOpenJobs() {
    var token = Cookies.get("token");
    return axios.get("/employer/get-openjobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getNumberOfApplicants(jobId) {
    var token = Cookies.get("token");
    return axios.get(`/employer/numberof-applicants/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getApplicantsOfJob(jobId) {
    var token = Cookies.get("token");
    return axios.get(`/employer/applicants-job/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  selectCandidate(jobId, candidateId) {
    var token = Cookies.get("token");
    return axios.get(`/employer/select-candidate/${jobId}/${candidateId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
}
export default new EmployerService();
