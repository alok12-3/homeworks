import { useState } from "react";
import {
  FaQuestionCircle,
  FaDumbbell,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSidebar } from "../../hooks/useSidebar";
import { FaCalendarAlt } from "react-icons/fa";

const Sidebar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState("quiz");
  const { collapsed, setCollapsed } = useSidebar();
  const navigate = useNavigate();
  const { username } = useParams(); // Extract the username parameter

  const tabs = [
    { name: "quiz", icon: <FaQuestionCircle />, label: "Quiz" }, // Added FaQuestionCircle for quiz
    // { name: "daily", icon: <FaCalendarAlt />, label: "Daily" },
    { name: "practice", icon: <FaDumbbell />, label: "Practice" }, // Added FaDumbbell for practice
  ];

  const handleTabClick = (tabName) => {
    setActiveTabLocal(tabName);
    setActiveTab(tabName);
    navigate(`/student/${username}/${tabName}`); // Include the username in the path
  };

  return (
    <div
      className={`hidden md:flex flex-col border-r-2 border-gray-200 min-h-screen ${
        collapsed ? "w-20" : "w-60"
      } bg-white`}
    >
      <div className="flex items-center justify-between px-8 py-6">
        {!collapsed && (
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: "70px", height: "35px", objectFit: "contain" }}
            className="h-8 w-auto"
          />
        )}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FaBars /> : <FaArrowLeft />}
        </button>
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex items-center px-8 py-4 my-1 cursor-pointer ${
            activeTab === tab.name ? "bg-gray-200" : ""
          }`}
          onClick={() => handleTabClick(tab.name)}
        >
          {tab.icon}
          {!collapsed && <span className="ml-2">{tab.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
