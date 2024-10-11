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
    data: [33, 38, 52, 41, 64, 75, 61, 70, 84],
    borderColor: "#f59e0b",
    backgroundColor: "rgba(252, 211, 77, 0.25)",
    btnColor: "border-amber-500",
    feedback: [
      "January sales were strong due to new year promotions.",
      "February saw a slight dip, likely due to post-holiday lull.",
      "March sales picked up with the launch of our spring collection.",
      "April continued the upward trend with Easter promotions.",
      "May sales dipped slightly but remained strong.",
      "June sales were steady, ending Q2 on a positive note.",
    ],
  },
  Social: {
    label: "Social",
    data: [14, 25, 52, 37, 61, 75, 87, 8, 32],
    borderColor: "#14b8a6",
    backgroundColor: "rgba(94, 234, 212, 0.25)",
    btnColor: "border-teal-500",
    feedback: [
      "January traffic was low due to reduced marketing spend.",
      "February saw increased traffic from Valentine's Day campaign.",
      "March traffic remained steady with consistent marketing efforts.",
      "April traffic dropped due to a technical issue with the website.",
      "May traffic spiked due to a viral social media campaign.",
      "June traffic normalized after the May spike.",
    ],
  },
  Maths: {
    label: "Maths",
    data: [80, 65, 74, 94, 90, 82, 88, 97, 85],
    borderColor: "#84cc16",
    backgroundColor: "rgba(190, 242, 100, 0.25)",
    btnColor: "border-lime-500",
    feedback: [
      "January conversions were average.",
      "February saw high conversions due to improved product recommendations.",
      "March conversions dropped due to inventory issues.",
      "April conversions slightly improved with new inventory.",
      "May conversions were low, possibly due to high traffic but low intent visitors.",
      "June conversions remained low, suggesting need for UX improvements.",
    ],
  },
  English: {
    label: "English",
    data: [25, 58, 44, 76, 71, 85, 55, 68, 84],
    borderColor: "#f43f5e",
    backgroundColor: "rgba(253, 164, 175, 0.25)",
    btnColor: "border-rose-500",
    feedback: [
      "January traffic was low due to reduced marketing spend.",
      "February saw increased traffic from Valentine's Day campaign.",
      "March traffic remained steady with consistent marketing efforts.",
      "April traffic dropped due to a technical issue with the website.",
      "May traffic spiked due to a viral social media campaign.",
      "June traffic normalized after the May spike.",
    ],
  },
};

const PerfAtBlChart = () => {
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);
  const [selectedMonth, setSelectedMonth] = useState(null);
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
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setCurrentSubject(subject)}
              className={`w-full mb-2 py-2 px-2 rounded-md text-sm ${
                currentSubject === subject
                  ? `${chartData[currentSubject].btnColor} text-white bg-transparent shadow-lg shadow-gray-900`
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
                    ? `${chartData[currentSubject].btnColor} text-white active:border-gray-800 shadow-md`
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
            {chartData[currentSubject].feedback[selectedMonth] !== undefined ? (
              <p className="text-gray-200 text-sm">
                {chartData[currentSubject].feedback[selectedMonth]}
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
