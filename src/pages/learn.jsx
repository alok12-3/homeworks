import React from "react";
import CourseTopBar from "../my_components/dashboard/CourseTopBar";
import Unit from "../my_components/content/Unit";
import { SidebarProvider, useSidebar } from "../hooks/useSidebar";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; // Example icons

const Learn = () => {
  const { collapsed } = useSidebar();

  return (
    <div className="px-4 py-4 flex flex-col lg:flex-row">
      {/* New content becomes the navbar on small screens */}
      <div className="fixed top-0 left-0 w-full bg-gray-100 p-4 z-10 lg:hidden">
        {/* Container for tabs with logos */}
        <div className="flex items-center justify-around h-full">
          {/* Tabs with logos */}
          <div className="flex space-between">
            <button className="p-2">
              <FaHome className="text-xl" />
            </button>
            <button className="p-2">
              <FaUser className="text-xl" />
            </button>
            <button className="p-2">
              <FaCog className="text-xl" />
            </button>
          </div>
        </div>
        {/* New Content */}
        <div className="mt-4 text-center">
          <h2>New Content</h2>
          <p>This section is now part of the navbar on small screens.</p>
        </div>
      </div>

      {/* CourseTopBar is fixed below the navbar */}
      <div className="fixed top-16 left-0 w-full z-10 lg:static lg:z-auto">
        <CourseTopBar
          title="Calculus"
          description="Riemann's Integral"
          color="green"
        />
      </div>

      {/* Adding margin to the main content to account for the fixed elements height */}
      <div className="mt-32 lg:mt-0 flex-1">
        <div
          className={`${
            collapsed ? "w-full lg:w-3/5" : "w-full lg:w-3/5"
          } pr-0 lg:pr-40`}
        >
          <div className="space-y-4">
            <Unit />
          </div>
        </div>
      </div>

      {/* New content for large screens */}
      <div
        className={`fixed right-0 top-0 h-full bg-gray-100 p-4 hidden lg:block transition-all duration-300 ${
          collapsed ? "lg:mr-40" : ""
        } w-full lg:w-2/5`}
      >
        <h2>New Content</h2>
        <p>
          This section will take up 40% of the width and be fixed on large
          screens.
        </p>
      </div>
    </div>
  );
};

export default Learn;
