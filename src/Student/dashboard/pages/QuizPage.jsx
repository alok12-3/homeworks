import React from "react";
import QuizCard from "../../../components/ui/quizcard";
import TabComponent from "../../../components/ui/tabSlider";

const QuizPage = () => {
  // Manually created quiz data
  const quizzes = [
    { id: "a1b2c3d4e5", title: "Math Quiz", isSolved: true },
    { id: "f6g7h8i9j0", title: "Science Quiz", isSolved: false },
    { id: "k1l2m3n4o5", title: "History Quiz", isSolved: true },
  ];

  return (
    <>
      <TabComponent></TabComponent>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-4 py-4">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz} />
        ))}
      </div>
    </>
  );
};

export default QuizPage;
