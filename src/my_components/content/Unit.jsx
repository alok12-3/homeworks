// src/components/Unit.jsx
import React from "react";
import DarkUnit from "../../my_components/buttons/DarkUnit";
import LightUnit from "../../my_components/buttons/LightUnit";
const Unit = () => {
  // Ensure the width is a string ending with '%'

  return (
    <>
      <DarkUnit></DarkUnit>
      <LightUnit></LightUnit>
      <LightUnit></LightUnit>
      <LightUnit></LightUnit>
      <LightUnit></LightUnit>
    </>
  );
};

export default Unit;
