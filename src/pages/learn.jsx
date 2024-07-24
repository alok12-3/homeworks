import React from "react";
import CourseTopBar from "../my_components/dashboard/CourseTopBar";
import Unit from "../my_components/content/Unit";

const Learn = () => {
  return (
    <div className="px-4 py-4">
      <CourseTopBar
        title="Calculus"
        description="Riemann's Integral"
        color="green"
      ></CourseTopBar>
      <div className="space-y-4">
        <Unit></Unit>
      </div>
    </div>
  );
};

export default Learn;
