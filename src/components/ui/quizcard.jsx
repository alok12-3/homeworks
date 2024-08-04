import React from "react";
import styles from "./css_modules/quizcard.module.css"; // Import the CSS module
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

function QuizCard({ quiz }) {
  return (
    <div
      className={`${styles.card} bg-white shadow-lg rounded-lg flex justify-between items-center`}
    >
      <div
        className={`${styles.text} text-lg font-medium text-gray-800 px-8 py-5`}
      >
        {quiz.title}
      </div>
      <div>
        <Link
          to="/demo"
          className={buttonVariants({
            variant: "light",
            size: "sm",
          })}
        >
          <div className="text-xs font-semibold text-blue-600 p-2">
            {quiz.isSolved ? "Revist" : "Solve"}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default QuizCard;
