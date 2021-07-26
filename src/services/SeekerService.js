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
}
export default new SeekerService();
