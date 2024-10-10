import { useState } from "react";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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

const subjects = ["Science", "Social", "Maths", "English"];

const chartData = {
  Science: {
    label: "Science",
    data: [14, 25, 52, 37, 61, 75, 87, 8, 32],
    borderColor: "#f59e0b",
    backgroundColor: "rgba(252, 211, 77, 0.25)",
    btnColor: "border-amber-500",
  },
  Social: {
    label: "Social",
    data: [33, 38, 52, 41, 64, 75, 61, 70, 84],
    borderColor: "#14b8a6",
    backgroundColor: "rgba(94, 234, 212, 0.25)",
    btnColor: "border-teal-500",
  },
  Maths: {
    label: "Maths",
    data: [25, 58, 44, 76, 71, 85, 55, 68, 84],
    borderColor: "#84cc16",
    backgroundColor: "rgba(190, 242, 100, 0.25)",
    btnColor: "border-lime-500",
  },
  English: {
    label: "English",
    data: [80, 65, 74, 94, 90, 82, 88, 97, 85],
    borderColor: "#f43f5e",
    backgroundColor: "rgba(253, 164, 175, 0.25)",
    btnColor: "border-rose-500",
  },
};

const PerfAtSchChart = () => {
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept"],
    datasets: [
      {
        data: chartData[currentSubject].data,
        borderColor: chartData[currentSubject].borderColor,
        backgroundColor: chartData[currentSubject].backgroundColor,
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
  };

  return (
    <div className="flex flex-col">
      <div className="flex-auto md:flex md:flex-row-reverse md:p-1 relative">
        <div className="hidden md:block w-full md:w-1/5 pr-2 mt-1">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setCurrentSubject(subject)}
              className={`w-full mb-2 py-2 px-2 rounded-md text-sm ${
                currentSubject === subject
                  ? `${chartData[currentSubject].btnColor} text-white active:border-gray-800`
                  : `bg-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-800`
              }`}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="flex justify-end  md:hidden content-end">
          <button
            onClick={toggleDropdown}
            className={`w-28 rounded-md text-sm text-white py-1.5 ${chartData[currentSubject].btnColor}`}
          >
            {currentSubject}
            <FontAwesomeIcon className="ml-1" icon={faChevronDown} size="sm" />
          </button>
        </div>
        {dropdownIsOpen && (
          <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => {
                  setCurrentSubject(subject);
                  toggleDropdown();
                }}
                className={`w-full mb-2 py-1 px-2 rounded-md text-sm ${
                  currentSubject === subject
                    ? `${chartData[currentSubject].btnColor} text-white bg-transparent shadow-lg shadow-gray-900`
                    : `bg-transparent text-gray-400 hover:bg-gray-800 hover:border-gray-800 hover:shadow-md `
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
    </div>
  );
};

export default PerfAtSchChart;
