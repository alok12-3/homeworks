import React from "react";
import CourseTopBar from "../my_components/dashboard/CourseTopBar";
import Unit from "../my_components/content/Unit";
import LearnNavbar from "../my_components/dashboard/Navbar";

const QuizPage = () => {
  return (
    <>
      <div className="px-4">
        <LearnNavbar color="white"></LearnNavbar>
      </div>
      <div className="relative overflow-x-auto rounded-lg p-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 rounded-t-lg ">
            <tr>
              <th scope="col" className="px-6 py-6">
                Assignment
              </th>
              <th scope="col" className="px-6 py-6">
                Status
              </th>
              <th scope="col" className="px-6 py-6">
                Score
              </th>
              <th scope="col" className="px-6 py-6">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    Graphs of the Polynomials
                  </div>
                  <div className="font-normal text-gray-500">Polynomials</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Solved
                </div>
              </td>
              <td className="px-6 py-4">50/100</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  RETAKE
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    Finding the roots
                  </div>
                  <div className="font-normal text-gray-500">Polynomials</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Incomplete
                </div>
              </td>
              <td className="px-6 py-4">_ _ _</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  SOLVE
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuizPage;
