import axios from "axios";
class UserService {
  registerUser(userData) {
    return axios.post("/register", userData);
  }
  loginUser(userData) {
    return axios.post("/login", userData);
  }
}
export default new UserService();
