import React from "react";
import styles from "./solid.button.module.css";

const SolidButton = ({ buttonText, widthPercentage }) => {
  return (
    <button
      className={styles.duolingoButton}
      style={{ width: widthPercentage }}
    >
      <span className={styles.duolingoButtonText}>{buttonText}</span>
    </button>
  );
};

export default SolidButton;
