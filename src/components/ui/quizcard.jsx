import React from "react";
import styles from "./css_modules/quizcard.module.css"; // Import the CSS module
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { useStudent } from "../../context/studentContext";

function QuizCard({ quiz }) {
  const { student } = useStudent();

  return (
    <div
      className={`${styles.card} bg-white rounded-lg flex justify-between items-center`}
    >
      <div
        className={`${styles.text} text-lg font-medium text-gray-800 px-8 py-5`}
      >
        {quiz.title}
      </div>
      <div>
        <Link
          to={`/student/${student.username}/quiz/${quiz.id}`}
          className={buttonVariants({
            variant: "light",
            size: "sm",
          })}
        >
          <div className="text-xs font-semibold text-blue-600 p-2">
            {quiz.isSolved ? "Revisit" : "Solve"}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default QuizCard;
