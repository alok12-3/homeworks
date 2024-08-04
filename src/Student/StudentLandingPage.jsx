// StudentDashboard.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dashboard from "./dashboard/layout";
import { StudentProvider } from "../context/studentContext";
const StudentDashboard = () => {
  // const { username } = useParams();
  // const [error, setError] = useState("");
  // console.log(username);
  // useEffect(() => {
  //   const fetchStudent = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_BACKEND_URL}/api/student/${username}`
  //       );
  //       setStudent(response.data);
  //     } catch (error) {
  //       console.error("Error fetching student:", error);
  //       setError(
  //         error.response
  //           ? error.response.data.message
  //           : "Failed to fetch student"
  //       );
  //     }
  //   };
  //   fetchStudent();
  // }, [username, setStudent]);

  // if (error) {
  //   return <p style={{ color: "red" }}>{error}</p>;
  // }

  // if (!student) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <StudentProvider>
        <Dashboard></Dashboard>
      </StudentProvider>
    </>
  );
};

export default StudentDashboard;
