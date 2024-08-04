import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/studentdashboard/SideBar";
import TabBar from "../../components/studentdashboard/TabBar";
import { SidebarProvider, useSidebar } from "../../hooks/useSidebar";
import { useStudent } from "../../context/studentContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DashboardContent = ({ setActiveTab }) => {
  const { username } = useParams();
  const { student, setStudent } = useStudent();
  const [error, setError] = useState("");
  console.log(username);
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
  }, [username, setStudent]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!student) {
    return <p>Loading...</p>;
  }
  const { collapsed } = useSidebar();
  // console.log(student);
  return (
    <div className="flex ">
      <div className="fixed">
        <Sidebar setActiveTab={setActiveTab} />
      </div>
      <div className={`flex-1 ${collapsed ? "md:pl-20" : "md:pl-60"} pl-0`}>
        <Outlet />
      </div>
      <TabBar setActiveTab={setActiveTab} />
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("quiz");

  return (
    <SidebarProvider>
      <DashboardContent setActiveTab={setActiveTab} />
    </SidebarProvider>
  );
};

export default Dashboard;
