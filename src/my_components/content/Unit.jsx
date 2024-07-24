import React from "react";
import DarkUnit from "../../my_components/buttons/DarkUnit";
import LightUnit from "../../my_components/buttons/LightUnit";

const Unit = () => {
  // Ensure the width is a string ending with '%'

  return (
    <div className="flex justify-center">
      <div className="flex-col space-y-8">
        <DarkUnit></DarkUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
        <LightUnit></LightUnit>
      </div>
    </div>
  );
};

export default Unit;
