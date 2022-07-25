import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chart } from "./Components/Chart";

import { DynamicGraph } from "./Components/DynamicGraph";
import { Nav } from "./Components/Nav";
import { UsersTable } from "./Components/UsersTable";

import { getUsers } from "./Store/Users/usersSlice";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<UsersTable />} />
            <Route path="charts" element={<Chart />}>
              <Route path="1" element={<DynamicGraph type="age" />} />
              <Route path="age" element={<DynamicGraph type="age" />} />
              <Route path="yoe" element={<DynamicGraph type="yoe" />} />
              <Route path="salary" element={<DynamicGraph type="salary" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
