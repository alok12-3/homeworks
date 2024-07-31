import React from "react";
import LearnNavbar from "../../../my_components/dashboard/Navbar";

const cardsData = [
  {
    topic: "Topic 3",
    chapter: "Chapter 3",
    score: "75/100",
    status: "Pending",
  },
  {
    topic: "Topic 3",
    chapter: "Chapter 3",
    score: "75/100",
    status: "Pending",
  },
  { topic: "Topic 1", chapter: "Chapter 1", score: "85/100", status: "Done" },
];

const Card = ({ topic, chapter, score, status, isLast }) => (
  <div
    className={`w-full max-w-sm bg-white border border-gray-200 m-4 ${
      isLast ? "mb-20" : ""
    }`}
    style={{ borderRadius: "1rem" }}
  >
    <div className="flex flex-col items-center p-4">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {topic}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {chapter}
      </span>
      <div className="flex items-center justify-between w-full mt-4 md:mt-6">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
            Score:
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {score}
          </span>
        </div>
        <div
          className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md ${
            status === "Done"
              ? "bg-green-500/20 text-green-900"
              : status === "In Progress"
              ? "bg-yellow-500/20 text-yellow-900"
              : "bg-red-500/20 text-red-900"
          }`}
        >
          <span className="">{status}</span>
        </div>
      </div>
      <div className="flex mt-4 md:mt-6">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {status === "Done" ? "Revisit" : "Solve"}
        </a>
      </div>
    </div>
  </div>
);

const QuizPage = () => (
  <>
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          topic={card.topic}
          chapter={card.chapter}
          score={card.score}
          status={card.status}
          isLast={index === cardsData.length - 1}
        />
      ))}
    </div>
  </>
);

export default QuizPage;
