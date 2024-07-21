import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const TabBar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState("learn");
  const navigate = useNavigate();

  const tabs = [
    { name: "learn", icon: <FaHome />, label: "Learn" },
    { name: "profile", icon: <FaUser />, label: "Profile" },
  ];

  const handleTabClick = (tabName) => {
    setActiveTabLocal(tabName);
    setActiveTab(tabName);
    navigate(`/student/dashboard/${tabName}`);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-50 p-2 flex justify-around border-t border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex flex-col items-center cursor-pointer ${
            activeTab === tab.name ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleTabClick(tab.name)}
        >
          {tab.icon}
          <span className="text-xs">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
