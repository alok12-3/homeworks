import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../my_components/dashboard/SideBar";
import TabBar from "../../my_components/dashboard/TabBar";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("learn");

  return (
    <div className="flex h-screen">
      <div className="w-1/7 md:w-1/4 lg:w-1/5 ">
        <Sidebar setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <TabBar setActiveTab={setActiveTab} />
    </div>
  );
};

export default StudentDashboard;
