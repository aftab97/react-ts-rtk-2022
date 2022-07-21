import React from "react";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const AgeGraph = ({ graphData, dataOptions }: any) => {
  return <div>{<Scatter options={dataOptions} data={graphData} />}</div>;
};
