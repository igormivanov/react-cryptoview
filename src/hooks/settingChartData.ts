import { Price } from "../types/Prices";
import { formatDate } from "../utils/formatDate";
import type { ChartData } from 'chart.js';

export const settingChartData = (setChartData: React.Dispatch<React.SetStateAction<ChartData<"line">>>, coinPrices: Price[]) => {
  setChartData({
    labels: coinPrices.map((data) => formatDate(data[0])),
    datasets: [
      {
        data: coinPrices.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        backgroundColor: "rgba(58, 128, 233,0.1)",
        tension: 0.25,
        borderColor: "#3a80e9",
        pointRadius: 0,
        yAxisID: "crypto1",
      },
    ],
  });
}