// StudentContext.js
import React, { createContext, useState, useContext } from "react";

const StudentContext = createContext(null);

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  return useContext(StudentContext);
};
