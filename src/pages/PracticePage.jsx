import React from "react";
import CourseTopBar from "../my_components/dashboard/CourseTopBar";
import Unit from "../my_components/content/Unit";
import LearnNavbar from "../my_components/dashboard/Navbar";

const PracticePage = () => {
  return (
    <>
      <div className="px-4">
        <LearnNavbar color="white"></LearnNavbar>

        <CourseTopBar
          title="Calculus"
          description="Riemann's Integral"
          color="green"
        ></CourseTopBar>
        <div className="space-y-4">
          <Unit></Unit>
        </div>
      </div>
    </>
  );
};

export default PracticePage;
