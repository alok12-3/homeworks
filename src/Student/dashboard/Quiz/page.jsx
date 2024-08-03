// StudentDashboard.js
import React from "react";
import { useParams } from "react-router-dom";
import useFetchStudent from "../../../hooks/useFetchStudent";
import StudentDetails from "../pages/QuizPage";
import QuizPage from "../pages/QuizPage";

const Quiz = () => {
  const { username } = useParams();
  const { student, error } = useFetchStudent(username);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!student) {
    return <p>Loading...</p>;
  }

  return <QuizPage student={student} />;
};

export default Quiz;
