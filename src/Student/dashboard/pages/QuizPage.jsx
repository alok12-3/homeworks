import React from "react";
import { useStudent } from "../../../context/studentContext";

const QuizPage = () => {
  // const { student, error } = useContext(StudentContext);
  const { student } = useStudent();

  return (
    <>
      <h1>{student.name}</h1>
    </>
  );
};

export default QuizPage;
