import { useState } from "react";
import { FaDumbbell, FaQuestionCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const TabBar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState("quiz");
  const navigate = useNavigate();

  const tabs = [
    { name: "quiz", icon: <FaQuestionCircle />, label: "Quiz" }, // Added FaQuestionCircle for quiz
    // { name: "daily", icon: <FaCalendarAlt />, label: "Daily" },
    { name: "practice", icon: <FaDumbbell />, label: "Practice" }, // Added FaDumbbell for practice
  ];

  const handleTabClick = (tabName) => {
    setActiveTabLocal(tabName);
    setActiveTab(tabName);
    navigate(`/student/dashboard/${tabName}`);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-50 p-4 flex justify-around border-t-2 border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex flex-col items-center cursor-pointer rounded-lg ${
            activeTab === tab.name
              ? "text-gray-900 bg-gray-200 p-2 border-2 border-gray-700 rounded-lg"
              : "text-gray-400 p-2 border-2 border-gray-50 rounded-lg"
          }`}
          style={{ borderRadius: "10px" }}
          onClick={() => handleTabClick(tab.name)}
        >
          {tab.icon}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
