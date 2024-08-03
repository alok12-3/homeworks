// hooks/useFetchStudent.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchStudent = (username) => {
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

  return { student, error };
};

export default useFetchStudent;
