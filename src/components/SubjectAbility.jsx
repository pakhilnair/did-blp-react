import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip);

const data = {
  labels: ["Wisdom", "Science", "Social", "English", "Maths"],
  datasets: [
    {
      label: "Ability",
      data: [70, 40, 90, 60, 75],
      backgroundColor: "rgb(212, 212, 212, 0.05)",
      borderColor: "#cbd5e1",
      borderWidth: 2,
      pointBorderColor: "#eab308",
      pointBackgroundColor: "#1f2937",
      pointRadius: 6,
    },
  ],
};

const options = {
  scales: {
    r: {
      beginAtZero: true,
      angleLines: {
        display: true,
        color: "#1e293b",
      },
      grid: {
        color: "#1e293b",
      },
      ticks: {
        backdropColor: "transparent",
        color: "rgb(212, 212, 212, 0.25)",
        stepSize: 20,
      },
      pointLabels: {
        color: "rgb(212, 212, 212, 0.75)",
        font: {
          size: 12,
        },
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
  plugins: {},
};

const SubjectAbility = () => {
  return <Radar data={data} options={options} />;
};

export default SubjectAbility;
