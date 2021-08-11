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
import OpenJobs from "./components/Employer/OpenJobs";
import OpenJobDetails from "./components/Employer/OpenJobDetails";
import RecomendedJob from "./components/Seeker/RecomendedJob";
import JobDetails from "./components/Seeker/JobDetails";
import ApplicantOfJob from "./components/Employer/ApplicantOfJob";
import ApplicantProfile from './components/Employer/ApplicantProfile';
import SelectedJobs from './components/Seeker/SelectedJobs';
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
      <Route path="/employer-openjobs" component={OpenJobs} />
      <Route path="/employer-openjobs-details" component={OpenJobDetails} />
      <Route path="/employer-applicantof-job" component={ApplicantOfJob} />
      <Route path="/employer-applicant-profile" component={ApplicantProfile} />

      {/* Job Seeker Routes */}
      <Route path="/seeker-dashboard" component={SeekerDashboard} />
      <Route path="/seeker-profile" component={SeekerProfile} />
      <Route path="/seeker-recomendedjobs" component={RecomendedJob} />
      <Route path="/seeker-openjobs-details" component={JobDetails} />
      <Route path="/seeker-selected-jobs" component={SelectedJobs} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
