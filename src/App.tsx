import {
  DataGrid,
  GridCellEditCommitParams,
  GridColumns,
  GridToolbar,
} from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, selectUsers } from "./Store/store";

import { addUser, getUsers } from "./Store/Users/usersSlice";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addUser());
    console.log(users);

    // edit user
  };

  const handleEdit = (e: any) => {
    console.log(e);
  };
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
    <div style={{ height: "40vh", width: "100%" }}>
      <button onClick={handleClick}>click</button>
      {users.loading === false && (
        <DataGrid
          rows={users.users}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          onCellEditStop={handleEdit}
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </div>
  );
};
