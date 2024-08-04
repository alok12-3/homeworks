// components/StudentDetails.js
import React from "react";
import { useStudent } from "../../../context/studentContext";

const PracticePage = () => {
  // const { student, error } = useContext(StudentContext);
  const { student } = useStudent();
  console.log(student);

  return (
    <>
      <div>
        <h1>{student.name}</h1>
      </div>
    </>
  );
};

export default PracticePage;
