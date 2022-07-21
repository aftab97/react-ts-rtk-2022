import React, { useEffect, useState } from "react";

import moment from "moment";
import { AgeGraph } from "./AgeGraph";
import { YoeGraph } from "./YoeGraph";
import { SalaryGraph } from "./SalaryGraph";

const Chart = ({ users }: any) => {
  //   mutate data to set the Y and X axis
  let allData = {
    graphAgeData: {
      datasets: [
        {
          label: "Age",
          data: users?.map(({ x, age }: any) => {
            return { x, y: age };
          }),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },

    graphSalaryData: {
      datasets: [
        {
          label: "Salary",
          data: users?.map(({ x, salary }: any) => {
            return { x, y: salary };
          }),
          backgroundColor: "blue",
        },
      ],
    },

    graphYoeData: {
      datasets: [
        {
          label: "Years Of Experience",
          data: users?.map(({ x, years_of_experience }: any) => {
            return { x, y: years_of_experience };
          }),
          backgroundColor: "purple",
        },
      ],
    },
  };

  const allOptions = {
    ageDataOptions: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <AgeGraph
        graphData={allData.graphAgeData}
        dataOptions={allOptions.ageDataOptions}
      />

      <YoeGraph
        graphData={allData.graphYoeData}
        dataOptions={allOptions.ageDataOptions}
      />

      <SalaryGraph
        graphData={allData.graphSalaryData}
        dataOptions={allOptions.ageDataOptions}
      />
    </div>
  );
};

export default Chart;
