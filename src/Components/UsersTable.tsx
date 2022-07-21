import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid";
import React from "react";

export const UsersTable = ({ users }: any) => {
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
    <DataGrid
      rows={users.users}
      columns={columns}
      experimentalFeatures={{ newEditingApi: true }}
      components={{ Toolbar: GridToolbar }}
    />
  );
};
