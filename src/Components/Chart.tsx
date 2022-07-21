import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

import moment from "moment";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const Chart = (props: any) => {
  const [ageData, setAgeData] = useState<any[]>([]);
  const [yoeData, setYoeData] = useState<any[]>([]);

  let graphAgeData = {
    datasets: [
      {
        label: "Age",
        data: ageData,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  const ageDataOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    props.users.users.map((user: any, index: any) => {
      let formattedAge = moment(user.date_of_birth, "DD-MM-YYYY").format();
      ageData.push({
        y: moment().diff(formattedAge, "years"),
        x: index,
      });

      yoeData.push({
        y: user.years_of_experience,
        x: index,
      });
    });
  }, []);

  return (
    <div>
      {ageData.length > 0 && (
        <Scatter options={ageDataOptions} data={graphAgeData} />
      )}
    </div>
  );
};

export default Chart;
