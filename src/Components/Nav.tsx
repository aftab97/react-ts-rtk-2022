import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "../Styles/styles.js";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <button onClick={() => navigate("/")}>Users Table</button>
        <button onClick={() => navigate("/charts/age")}>Chart with Age</button>
        <button onClick={() => navigate("/charts/salary")}>
          Chart with Salary
        </button>
        <button onClick={() => navigate("/charts/yoe")}>
          Chart with Years of Experience
        </button>
      </nav>
      <Outlet />
    </>
  );
};
