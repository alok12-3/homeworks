// Popup.js
import React from "react";
import styles from "./popup.module.css";

const Popup = ({ topicName, onStart, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>{topicName}</h2>
        <button onClick={onStart}>Start</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
