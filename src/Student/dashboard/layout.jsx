import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/studentdashboard/SideBar";
import TabBar from "../../components/studentdashboard/TabBar";
import { SidebarProvider, useSidebar } from "../../hooks/useSidebar";

const DashboardContent = ({ setActiveTab, student }) => {
  const { collapsed } = useSidebar();
  console.log(student);
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

const Dashboard = ({ student }) => {
  const [activeTab, setActiveTab] = useState("quiz");

  return (
    <SidebarProvider>
      <DashboardContent setActiveTab={setActiveTab} student={student} />
    </SidebarProvider>
  );
};

export default Dashboard;
