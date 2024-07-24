import React, { useState, useRef, useEffect } from "react";
import styles from "./dark.unit.module.css";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup"; // Import the Popup component

const DarkUnit = ({ buttonText, widthPercentage, route, topicName }) => {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPopupPosition({
        top: buttonRect.top,
        left: buttonRect.right + window.scrollX,
      });
    }
    setPopupVisible(true);
  };

  const handleStart = () => {
    setPopupVisible(false);
    setTimeout(() => {
      navigate(route);
    }, 130); // 0.15 seconds
  };

  const handleClose = () => {
    setPopupVisible(false);
  };

  return (
    <div className={styles.darkUnitContainer} style={{ position: "relative" }}>
      <button
        ref={buttonRef}
        className={styles.duolingoButton}
        style={{ display: "block" }}
        onClick={handleClick}
      >
        <span className={styles.starIcon}>★</span>
      </button>
      {isPopupVisible && (
        <Popup
          topicName={topicName}
          onStart={handleStart}
          onClose={handleClose}
          style={{ top: popupPosition.top, left: popupPosition.left }}
        />
      )}
    </div>
  );
};

export default DarkUnit;
