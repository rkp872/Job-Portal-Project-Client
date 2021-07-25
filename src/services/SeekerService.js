import axios from "axios";
import Cookies from "js-cookie";
class SeekerService {
  token = Cookies.get("token");

  getContact() {
    console.log("token  : ", this.token);
    return axios.get("/seeker/get-contact", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  updateContact(contact) {
    return axios.post("/seeker/update-contact", contact, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
export default new SeekerService();
