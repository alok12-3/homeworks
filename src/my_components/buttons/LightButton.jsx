import React from "react";
import styles from "./light.button.module.css";

const LightButton = ({ buttonText, widthPercentage }) => {
  return (
    <button
      className={styles.duolingoButton}
      style={{ width: widthPercentage }}
    >
      <span className={styles.duolingoButtonText}>{buttonText}</span>
    </button>
  );
};

export default LightButton;
