import HeroSection from "../../my_components/landingpage/herosection";
import Navbar from "../../my_components/landingpage/navbar";
import StudentDashboard from "../student_dashboard/layout";
import LoginPage from "../authentication/LoginPage";
const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      {/* <LoginPage></LoginPage> */}
      {/* <StudentDashboard></StudentDashboard> */}
    </>
  );
};

export default LandingPage;
