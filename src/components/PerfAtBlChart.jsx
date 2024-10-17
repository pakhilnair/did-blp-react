import { useState } from "react";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { perfAtBlChartData, blSubjects } from "../data/perfChartData.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const PerfAtBlChart = () => {
  const [currentSubject, setCurrentSubject] = useState(blSubjects[0]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept"],
    datasets: [
      {
        data: perfAtBlChartData[currentSubject].data,
        borderColor: perfAtBlChartData[currentSubject].borderColor,
        backgroundColor: perfAtBlChartData[currentSubject].backgroundColor,
        fill: true,
        tension: 0.3,
        pointRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "#1e293b" },
      },
      x: {
        grid: { color: "#1e293b" },
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    onClick: (e, nodes) => {
      if (nodes.length > 0) {
        const clickedNode = nodes[0];
        setSelectedMonth(clickedNode.index);
      } else {
        setSelectedMonth(null);
      }
    },
  };

  return (
    <div className="flex flex-col">
      <div className="flex-auto md:flex md:flex-row-reverse md:p-1 relative">
        <div className="hidden md:block w-full md:w-1/5 pr-2 mt-1">
          {blSubjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setCurrentSubject(subject)}
              className={`w-full mb-2 py-2 px-2 rounded-md text-sm ${
                currentSubject === subject
                  ? `${perfAtBlChartData[currentSubject].btnColor} text-white bg-transparent shadow-lg shadow-gray-900`
                  : `bg-transparent text-gray-400 hover:bg-gray-800 hover:border-gray-800 hover:shadow-md `
              }`}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="flex justify-end  md:hidden content-end">
          <button
            onClick={toggleDropdown}
            className={`w-28 rounded-md text-sm text-white py-1.5 ${perfAtBlChartData[currentSubject].btnColor}`}
          >
            {currentSubject}
            <FontAwesomeIcon className="ml-1" icon={faChevronDown} size="sm" />
          </button>
        </div>
        {dropdownIsOpen && (
          <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {blSubjects.map((subject) => (
              <button
                key={subject}
                onClick={() => {
                  setCurrentSubject(subject);
                  toggleDropdown();
                }}
                className={`w-full mb-2 py-1 px-2 rounded-md text-sm ${
                  currentSubject === subject
                    ? `${perfAtBlChartData[currentSubject].btnColor} text-white active:border-gray-800 shadow-md`
                    : `bg-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-800`
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        )}

        <div className="w-full md:w-4/5 md:mr-2">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="p-4 mt-8">
        <p className="text-gray-50 text-md font-bold">Feedback from teachers</p>
        {selectedMonth !== null ? (
          <div className="mt-4">
            {perfAtBlChartData[currentSubject].feedback[selectedMonth] !==
            undefined ? (
              <p className="text-gray-200 text-sm">
                {perfAtBlChartData[currentSubject].feedback[selectedMonth]}
              </p>
            ) : (
              <p className="text-gray-500 text-sm italic">
                No feedback recorded for the selected month.
              </p>
            )}
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-gray-500 text-sm italic">
              Please click on a chart node to see feedback
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfAtBlChart;
