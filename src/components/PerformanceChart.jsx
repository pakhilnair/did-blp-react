import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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
    btnColor: "bg-amber-500",
  },
  Social: {
    label: "Social",
    data: [14, 25, 52, 37, 61, 75, 87, 8, 32],
    borderColor: "#14b8a6",
    backgroundColor: "rgba(94, 234, 212, 0.25)",
    btnColor: "bg-teal-500",
  },
  Maths: {
    label: "Maths",
    data: [80, 65, 74, 94, 90, 82, 88, 97, 85],
    borderColor: "#84cc16",
    backgroundColor: "rgba(190, 242, 100, 0.25)",
    btnColor: "bg-lime-500",
  },
  English: {
    label: "English",
    data: [25, 58, 44, 76, 71, 85, 55, 68, 84],
    borderColor: "#f43f5e",
    backgroundColor: "rgba(253, 164, 175, 0.25)",
    btnColor: "bg-rose-500",
  },
};

const PerformanceChart = () => {
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept"],
    datasets: [
      {
        data: chartData[currentSubject].data,
        borderColor: chartData[currentSubject].borderColor,
        backgroundColor: chartData[currentSubject].backgroundColor,
        fill: true,
        tension: 0.3,
        pointRadius: 6,
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
    <div className="flex p-1">
      <div className="w-4/5 mr-4">
        <Line data={data} options={options} />
      </div>
      <div className="w-1/5 pr-2">
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
    </div>
  );
};

export default PerformanceChart;
