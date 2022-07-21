import React, { useEffect, useState } from "react";

import moment from "moment";
import { AgeGraph } from "./AgeGraph";
import { YoeGraph } from "./YoeGraph";
import { SalaryGraph } from "./SalaryGraph";

const Chart = (props: any) => {
  const [ageData, setAgeData] = useState<any[]>([]);
  const [yoeData, setYoeData] = useState<any[]>([]);
  const [salaryData, setSalaryData] = useState<any[]>([]);

  let allData = {
    graphAgeData: {
      datasets: [
        {
          label: "Age",
          data: ageData,
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },

    graphYoeData: {
      datasets: [
        {
          label: "Years Of Experience",
          data: yoeData,
          backgroundColor: "blue",
        },
      ],
    },

    graphSalaryData: {
      datasets: [
        {
          label: "Years Of Experience",
          data: salaryData,
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

      salaryData.push({
        y: user.salary,
        x: index,
      });
    });
  }, []);

  return (
    <div>
      {ageData.length > 0 && (
        <AgeGraph
          graphData={allData.graphAgeData}
          dataOptions={allOptions.ageDataOptions}
        />
      )}

      {yoeData.length > 0 && (
        <YoeGraph
          graphData={allData.graphYoeData}
          dataOptions={allOptions.ageDataOptions}
        />
      )}

      {salaryData.length > 0 && (
        <SalaryGraph
          graphData={allData.graphSalaryData}
          dataOptions={allOptions.ageDataOptions}
        />
      )}
    </div>
  );
};

export default Chart;
