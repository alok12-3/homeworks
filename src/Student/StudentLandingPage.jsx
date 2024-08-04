// StudentDashboard.js
import React from "react";

import Dashboard from "./dashboard/layout";
import { StudentProvider } from "../context/studentContext";
const StudentDashboard = () => {
  return (
    <>
      <StudentProvider>
        <Dashboard></Dashboard>
      </StudentProvider>
    </>
  );
};

export default StudentDashboard;
