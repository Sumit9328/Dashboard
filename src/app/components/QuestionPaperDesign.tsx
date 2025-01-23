import React from "react";

const QuestionPaperDesign = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-md shadow-lg">
      <h1 className="text-center text-xl font-[200] uppercase">
        Mathematics-Standard Question Paper Design
      </h1>
      <p className="text-center text-sm mt-1 font-medium">
        <strong>Class – X (2022-23)</strong>
      </p>
      <p className="text-center text-sm font-[200] mt-1">
        Time: 3 Hours &nbsp;&nbsp;&nbsp;&nbsp; Max. Marks: 80
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-400 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-400 px-4 py-2 text-left">S. No.</th>
              <th className="border border-gray-400 px-4 py-2 text-left">
                Typology of Questions
              </th>
              <th className="border border-gray-400 px-4 py-2 text-center">
                Total Marks
              </th>
              <th className="border border-gray-400 px-4 py-2 text-center">
                % Weightage (approx.)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">
                <strong>Remembering:</strong> Exhibit memory of previously learned
                material by recalling facts, terms, basic concepts, and answers.
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">43</td>
              <td className="border border-gray-400 px-4 py-2 text-center">54</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">2</td>
              <td className="border border-gray-400 px-4 py-2">
                <strong>Understanding:</strong> Demonstrate understanding of facts
                and ideas by organizing, comparing, translating, interpreting,
                giving descriptions, and stating main ideas.
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">19</td>
              <td className="border border-gray-400 px-4 py-2 text-center">24</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">3</td>
              <td className="border border-gray-400 px-4 py-2">
                <strong>Applying:</strong> Solve problems to new situations by
                applying acquired knowledge, facts, techniques, and rules in a
                different way.
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">18</td>
              <td className="border border-gray-400 px-4 py-2 text-center">22</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">4</td>
              <td className="border border-gray-400 px-4 py-2">
                <strong>Analyzing:</strong> Examine and break information into
                parts by identifying motives or causes. Make inferences and find
                evidence to support generalizations.
                <br />
                <strong>Evaluating:</strong> Present and defend opinions by making
                judgments about information, validity of ideas, or quality of work
                based on a set of criteria.
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">18</td>
              <td className="border border-gray-400 px-4 py-2 text-center">22</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-gray-400 px-4 py-2 font-[200]">
                Total
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center font-[200]">
                80
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center font-[200]">
                100
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionPaperDesign;
