import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js/auto"; //Dont get rid of this
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  chartData: ChartData<'line'>
  multiAxis?: boolean
}

export default function LineChart({ chartData, multiAxis = false }: LineChartProps) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
    },
  };

  return (
    <Line data={chartData as ChartData<"line">} options={options as ChartOptions<'line'>} />
  )
}