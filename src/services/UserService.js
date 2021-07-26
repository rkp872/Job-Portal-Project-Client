import axios from "axios";
import Cookies from "js-cookie";
class UserService {
  registerUser(userData) {
    return axios.post("/register", userData);
  }
  loginUser(userData) {
    return axios.post("/login", userData);
  }
  updateUser(user) {
    var token = Cookies.get("token");
    return axios.post("/update-user", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new UserService();
