import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./light.button.module.css";

const LightButton = ({ buttonText, widthPercentage, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      className={styles.duolingoButton}
      style={{ width: widthPercentage }}
      onClick={handleClick}
    >
      <span className={styles.duolingoButtonText}>{buttonText}</span>
    </button>
  );
};

export default LightButton;
