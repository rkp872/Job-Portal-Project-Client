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
}
export default new EmployerService();
