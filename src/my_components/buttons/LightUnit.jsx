import React from "react";
import styles from "./light.unit.module.css";
import { useNavigate } from "react-router-dom";

const LightUnit = ({ topic, route }) => {
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

export default LightUnit;
