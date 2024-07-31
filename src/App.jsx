import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingpage/LandingPage";
import Practice from "../src/pages/student_dashboard/pages/PracticePage";
import Quiz from "./pages/student_dashboard/pages/QuizPage";
import Daily from "./pages/student_dashboard/pages/DailyPage";
import StudentDashboard from "./pages/student_dashboard/layout";
import LoginPage from "./pages/authentication/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/history" element={<History />} />
        <Route path="/teacher/:username" element={<TeacherLandingPage />} />
        <Route path="/teacher" element={<TeacherLogin />} />
        <Route path="/School" element={<SchoolManagement />} /> */}
        {/* <Route path="/studentlogin" element={<StudentsLoginPage />} />
        <Route path="/student/:username" element={<StudentLandingPage />} /> */}
        <Route path="/student/dashboard" element={<StudentDashboard />}>
          <Route path="practice" element={<Practice />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="daily" element={<Daily />} />
          <Route
            index
            element={<Navigate to="/student/dashboard/quiz" replace />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
