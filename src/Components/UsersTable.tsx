import { DataGrid, GridColumns, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, selectUsers } from "../Store/store";
import { getUsers } from "../Store/Users/usersSlice";

import "../Styles/styles.js";

export const UsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usersFetched = useSelector(selectUsers);

  useEffect(() => {
    // fetch data from API by dispatching the fetch action
    dispatch(getUsers());
  }, [dispatch]);

  console.log(usersFetched);

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

  const getKeys = () => {
    if (usersFetched.users.length > 0)
      return Object.keys(usersFetched.users[0]);
  };

  const getHeader = () => {
    var keys = getKeys();
    return keys?.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  const getRowsData = () => {
    if (usersFetched.users.length > 0) {
      var items = usersFetched.users;
      var keys = getKeys();
      return items.map((row: any, index: any) => {
        return (
          <tr key={index}>
            <RenderRow key={index} data={row} keys={keys} />
          </tr>
        );
      });
    }
  };

  return (
    <>
      {usersFetched.users.length > 0 && (
        <div>
          <table className="table">
            <thead>
              <tr>{getHeader()}</tr>
            </thead>
            <tbody>{getRowsData()}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

const RenderRow = (props: any) => {
  return props.keys.map((key: any) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
