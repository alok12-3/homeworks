import React from "react";
import styles from "./solid.button.module.css";
import { useNavigate } from "react-router-dom";
const SolidButton = ({ buttonText, widthPercentage, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate(route);
    }, 130); // 0.15 seconds
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

export default SolidButton;
