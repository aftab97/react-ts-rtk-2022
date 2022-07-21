import { GridColumns } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "./Components/Chart";
import { UsersTable } from "./Components/UsersTable";
import { AppDispatch, selectUsers } from "./Store/store";

import { addUser, getUsers } from "./Store/Users/usersSlice";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);

  useEffect(() => {
    // fetch data from API by dispatching the fetch action
    dispatch(getUsers());
  }, [dispatch]);

  // Columns and header set for the table
  const columns: GridColumns = [
    {
      field: "first_name",
      headerName: "First Name",
      width: 180,
      editable: true,
    },
    { field: "last_name", headerName: "Last Name", width: 180, editable: true },
    { field: "email", headerName: "Email", width: 180, editable: true },
    { field: "date_of_birth", headerName: "DOB", width: 180, editable: true },
    { field: "industry", headerName: "Industry", width: 180, editable: true },
    { field: "salary", headerName: "Salary", type: "number", editable: true },
    {
      field: "years_of_experience",
      headerName: "Years Of Experience",
      type: "number",
      editable: true,
    },
  ];

  return (
    <div style={{ width: "100%", height: "70vh", padding: "10px" }}>
      {/* Check data is loaded before rendering table */}
      {users.users.length > 0 && (
        <>
          <UsersTable users={users} />
          <Chart users={users.users} />
        </>
      )}
    </div>
  );
};
