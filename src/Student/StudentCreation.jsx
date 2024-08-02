// import React, { useState } from "react";
// import axios from "axios";

// const CreateStudent = () => {
//   const [username, setUsername] = useState("");
//   const [name, setName] = useState("");
//   const [studentClass, setStudentClass] = useState("");
//   const [section, setSection] = useState("");
//   const [id, setId] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [teachers, setTeachers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [correctquestions, setCorrectquestions] = useState([]);
//   const [wrongquestions, setWrongquestions] = useState([]);
//   const [totalquestions, setTotalquestions] = useState([]);
//   const [schoolId, setSchoolId] = useState("");
//   const [studentResponse, setStudentResponse] = useState([]);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/new-student`,
//         {
//           username,
//           name,
//           class: studentClass,
//           section,
//           id,
//           age,
//           address,
//           phoneNumber,
//           teachers,
//           assignments,
//           correctquestions,
//           wrongquestions,
//           totalquestions,
//           schoolId,
//           studentResponse,
//         }
//       );
//       console.log("Student created:", response.data);
//       alert("Student created successfully!");
//       setUsername("");
//       setName("");
//       setStudentClass("");
//       setSection("");
//       setId("");
//       setAge("");
//       setAddress("");
//       setPhoneNumber("");
//       setTeachers([]);
//       setAssignments([]);
//       setCorrectquestions([]);
//       setWrongquestions([]);
//       setTotalquestions([]);
//       setSchoolId("");
//       setStudentResponse([]);
//       setError("");
//     } catch (error) {
//       console.error("Error creating student:", error);
//       setError(
//         error.response
//           ? error.response.data.message
//           : "Failed to create student"
//       );
//       alert("Failed to create student");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Class:</label>
//         <input
//           type="text"
//           value={studentClass}
//           onChange={(e) => setStudentClass(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Section:</label>
//         <input
//           type="text"
//           value={section}
//           onChange={(e) => setSection(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>ID:</label>
//         <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Address:</label>
//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>School ID:</label>
//         <input
//           type="text"
//           value={schoolId}
//           onChange={(e) => setSchoolId(e.target.value)}
//         />
//       </div>
//       <button type="submit">Create Student</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// };

// export default CreateStudent;

import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");

  const [section, setSection] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [correctquestions, setCorrectquestions] = useState([]);
  const [wrongquestions, setWrongquestions] = useState([]);
  const [totalquestions, setTotalquestions] = useState([]);
  const [schoolId, setSchoolId] = useState("");
  const [studentResponse, setStudentResponse] = useState([]);
  const [error, setError] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/classes`
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/new-student`,
        {
          username,
          password,
          name,
          classId: selectedClassId,
          section,
          id,
          age,
          address,
          phoneNumber,
          teachers,
          assignments,
          correctquestions,
          wrongquestions,
          totalquestions,
          schoolId,
          studentResponse,
        }
      );
      console.log("Student created:", response.data);
      alert("Student created successfully!");
      setUsername("");
      setPassword("");
      setName("");
      setSelectedClassId("");
      setSection("");
      setId("");
      setAge("");
      setAddress("");
      setPhoneNumber("");
      setTeachers([]);
      setAssignments([]);
      setCorrectquestions([]);
      setWrongquestions([]);
      setTotalquestions([]);
      setSchoolId("");
      setStudentResponse([]);
      setError("");
    } catch (error) {
      console.error("Error creating student:", error);
      setError(
        error.response
          ? error.response.data.message
          : "Failed to create student"
      );
      alert("Failed to create student");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Class:</label>
        <select
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map((classItem) => (
            <option key={classItem._id} value={classItem._id}>
              {classItem.className}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Section:</label>
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
      </div>
      <div>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label>School ID:</label>
        <input
          type="text"
          value={schoolId}
          onChange={(e) => setSchoolId(e.target.value)}
        />
      </div>
      <button type="submit">Create Student</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default CreateStudent;
