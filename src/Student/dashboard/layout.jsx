import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/studentdashboard/SideBar";
import TabBar from "../../components/studentdashboard/TabBar";
import { SidebarProvider, useSidebar } from "../../hooks/useSidebar";

const StudentDashboardContent = ({ setActiveTab }) => {
  const { collapsed } = useSidebar();

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

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("quiz");

  return (
    <SidebarProvider>
      <StudentDashboardContent setActiveTab={setActiveTab} />
    </SidebarProvider>
  );
};

export default StudentDashboard;
