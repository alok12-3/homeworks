import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ClassDetails from "./StudentClass";
import DisplayResponses from "./DisplayResponses";
import Dashboard from "./dashboard/layout";

const StudentDashboard = () => {
  const { username } = useParams();
  console.log(username);
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/student/${username}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
        setError(
          error.response
            ? error.response.data.message
            : "Failed to fetch student"
        );
      }
    };
    fetchStudent();
  }, [username]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Dashboard student={student}></Dashboard>
    </>
  );
};

export default StudentDashboard;
