import React, { useEffect } from "react";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Store/Users/usersSlice";
import { AppDispatch, selectUsers } from "../Store/store";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const DynamicGraph = ({ type }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);

  useEffect(() => {
    // fetch data from API by dispatching the fetch action
    dispatch(getUsers());
  }, [dispatch]);

  let allData = {
    graphAgeData: {
      datasets: [
        {
          label: "Age",
          data: users.users?.map(({ x, age }: any) => {
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
          data: users.users?.map(({ x, salary }: any) => {
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
          data: users.users?.map(({ x, years_of_experience }: any) => {
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

  console.log(users);
  console.log(type);
  return (
    <div>
      {users.users.length > 0 && (
        <>
          {type === "age" && (
            <Scatter
              options={allOptions.ageDataOptions}
              data={allData.graphAgeData}
            />
          )}
          {type === "yoe" && (
            <Scatter
              options={allOptions.ageDataOptions}
              data={allData.graphYoeData}
            />
          )}
          {type === "salary" && (
            <Scatter
              options={allOptions.ageDataOptions}
              data={allData.graphSalaryData}
            />
          )}
        </>
      )}
    </div>
  );
};
