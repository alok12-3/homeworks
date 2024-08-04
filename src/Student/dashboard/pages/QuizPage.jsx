import React from "react";
import QuizCard from "../../../components/ui/quizcard";

const QuizPage = () => {
  // Manually created quiz data
  const quizzes = [
    { title: "Math Quiz", isSolved: true },
    { title: "Science Quiz", isSolved: false },
    { title: "History Quiz", isSolved: true },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-4 py-4">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz} />
        ))}
      </div>
    </>
  );
};

export default QuizPage;
