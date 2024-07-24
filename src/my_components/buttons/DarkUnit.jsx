import React from "react";
import styles from "./dark.unit.module.css";
import { useNavigate } from "react-router-dom";
const DarkUnit = ({ buttonText, widthPercentage, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate(route);
    }, 130); // 0.15 seconds
  };
  return (
    <button
      className={styles.duolingoButton}
      style={{ display: "block" }}
      onClick={handleClick}
    >
      <span className={styles.starIcon}>★</span>
    </button>
  );
};

export default DarkUnit;
