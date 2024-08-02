import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Admin from "./pages/Admin";
import History from "./pages/History";
import Navbar from "./indcomponents/Navbar"; // Adjust the import path as necessary
import "./App.css"; // Import the App.css file
import Blankdiv from "./indcomponents/Blankdiv";
import TeacherLandingPage from "./Teachers/TeacherLandingPage/TecherLandingPage";
import TeacherLogin from "./Teachers/TeacherLogin/TeacherLogin"; // Adjust the import path as necessary
import SchoolManagement from "./SchoolManagementSystem/SchoolManagement"; // Adjust the import path as necessary
import StudentsLoginPage from "./Student/LoginCreation";
import StudentLandingPage from "./Student/StudentLandingPage"; // Adjust the import path as necessary
import Tester from "./Tester";
import LandingPage from "./pages/landingpage";
import LoginPage from "./Authentication/LoginPage";
import DemoPage from "./pages/Demo";
import ProtectedRoute from "./Authentication/ProtectedRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<ProtectedRoute element={Quiz} />} />
        <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
        <Route path="/history" element={<ProtectedRoute element={History} />} />
        <Route
          path="/teacher/:username"
          element={<ProtectedRoute element={TeacherLandingPage} />}
        />
        <Route path="/teacher" element={<TeacherLogin />} />
        <Route
          path="/School"
          element={<ProtectedRoute element={SchoolManagement} />}
        />
        <Route path="/studentlogin" element={<StudentsLoginPage />} />
        <Route
          path="/student/:username"
          element={<ProtectedRoute element={StudentLandingPage} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
      {/*<Tester></Tester>*/}
    </Router>
  );
}

export default App;
