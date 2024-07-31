import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import History from "./pages/History";
import "./App.css";
import TeacherLandingPage from "./Teachers/TeacherLandingPage/TecherLandingPage";
import TeacherLogin from "./Teachers/TeacherLogin/TeacherLogin"; // Adjust the import path as necessary
import SchoolManagement from "./SchoolManagementSystem/SchoolManagement"; // Adjust the import path as necessary
import StudentsLoginPage from "./Student/LoginCreation";
import StudentLandingPage from "./Student/StudentLandingPage"; // Adjust the import path as necessary
import LandingPage from "./pages/LandingPage";
import Practice from "../src/pages/PracticePage";
import Quiz from "./pages/QuizPage";
import Daily from "./pages/DailyPage";
import StudentDashboard from "./pages/student_dashboard/layout";
import LoginPage from "./pages/LoginPage";

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
            element={<Navigate to="/student/dashboard/practice" replace />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
