import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const TabBar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState("learn");
  const navigate = useNavigate();

  const tabs = [
    { name: "learn", icon: <FaHome className="text-xl" />, label: "Learn" },
    {
      name: "profile",
      icon: <FaUser className="text-xl" />,
      label: "Profile",
    },
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
