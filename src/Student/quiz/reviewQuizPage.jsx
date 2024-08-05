import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import sol from "/assets/sol.jpg";

// Sample quiz data with LaTeX formatted question
const quizData = [
  {
    questionLatex: `
      \\text{Q. Find the roots of the quadratic equation} \\newline
      3x^2 - 5x + 2 = 0
    `,
    studentAnswer: "https://example.com/student-answer-3.jpg",
    feedback: [
      "Good attempt, but check your quadratic formula application.",
      "Ensure you simplify correctly.",
      "Revisit the quadratic formula steps.",
      "Practice solving quadratic equations.",
    ],
    correctSolution: `
      \\text{Step 1: Start with the quadratic equation} \\newline
      3x^2 - 5x + 2 = 0 \\newline
      \\text{Step 2: Identify coefficients} \\newline
      a = 3, \\ b = -5, \\ c = 2 \\newline
      \\text{Step 3: Apply the quadratic formula} \\newline
      x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\newline
      \\text{Step 4: Substitute coefficients} \\newline
      x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4(3)(2)}}{2(3)} \\newline
      x = \\frac{5 \\pm \\sqrt{25 - 24}}{6} \\newline
      x = \\frac{5 \\pm 1}{6} \\newline
      \\text{Step 5: Solve for both values of } x \\newline
      x = \\frac{6}{6} = 1 \\newline
      x = \\frac{4}{6} = \\frac{2}{3}
    `,
  },
];

function ReviewQuizPage() {
  return (
    <div className="p-4">
      {quizData.map((quiz, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-left">
            <div style={{ textAlign: "left" }}>
              <BlockMath>{quiz.questionLatex}</BlockMath>
            </div>
          </h2>

          <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
            <div className="lg:w-1/2">
              <strong>Student's Answer:</strong>
              <div>
                <img
                  src={sol}
                  alt="Student answer"
                  className="max-w-full h-auto mt-2"
                />
              </div>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <strong>Correct Solution:</strong>
              <BlockMath>{quiz.correctSolution}</BlockMath>
            </div>
          </div>
          <div>
            <strong>Feedback:</strong>
            <ul className="list-disc ml-5">
              {quiz.feedback.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
          <hr className="mt-8" />
        </div>
      ))}
    </div>
  );
}

export default ReviewQuizPage;
