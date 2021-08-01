import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/User/Home";
import Footer from "./components/User/Footer";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import EmployerDashboard from "./components/Employer/Dashboard";
import SeekerDashboard from "./components/Seeker/Dashboard";
import EmployerProfile from "./components/Employer/Profile";
import SeekerProfile from "./components/Seeker/Profile";
import NewJob from "./components/Employer/NewJob";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {/* Employer Routes */}
      <Route path="/employer-dashboard" component={EmployerDashboard} />
      <Route path="/employer-profile" component={EmployerProfile} />
      <Route path="/employer-newjob" component={NewJob} />
      {/* Job Seeker Routes */}
      <Route path="/seeker-dashboard" component={SeekerDashboard} />
      <Route path="/seeker-profile" component={SeekerProfile} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
