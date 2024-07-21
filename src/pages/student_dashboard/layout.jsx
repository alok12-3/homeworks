import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../my_components/dashboard/SideBar";
import TabBar from "../../my_components/dashboard/TabBar";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("learn");

  return (
    <div className="flex min-h-screen">
      <Sidebar setActiveTab={setActiveTab} />
      <main className="flex-1">
        <Outlet />
      </main>
      <TabBar setActiveTab={setActiveTab} />
    </div>
  );
};

export default StudentDashboard;
