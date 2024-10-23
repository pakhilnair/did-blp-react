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

const ReadingMemoryChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        borderColor: chartData.borderColor,
        backgroundColor: chartData.backgroundColor,
        fill: true,
        tension: 0.1,
        pointRadius: 7,
      },
    ],
  };
  const options = {
    responsive: true,
    aspectRatio: 1.5,
    scales: {
      y: {
        min: 60,
        max: 300,
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
    <div className="w-full ">
      <Line data={data} options={options} />
    </div>
  );
};

export default ReadingMemoryChart;
