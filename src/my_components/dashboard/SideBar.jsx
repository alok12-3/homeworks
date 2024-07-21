import { useState } from "react";
import { FaHome, FaUser, FaBars, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState("learn");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const tabs = [
    { name: "learn", icon: <FaHome />, label: "Learn" },
    { name: "profile", icon: <FaUser />, label: "Profile" },
  ];

  const handleTabClick = (tabName) => {
    setActiveTabLocal(tabName);
    setActiveTab(tabName);
    navigate(`/dashboard/${tabName}`);
  };

  return (
    <div
      className={`hidden md:flex flex-col ${
        collapsed ? "w-20" : "w-60"
      } bg-gray-50`}
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
