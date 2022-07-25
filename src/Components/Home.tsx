import React from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/styles.js";

export const Home = () => {
  const naigate = useNavigate();

  return (
    <div className="homescreen-container">
      <button onClick={() => naigate("/table")}>Users Table</button>
      <button onClick={() => naigate("/charts/age")}>Chart with Age</button>
      <button onClick={() => naigate("/charts/salary")}>
        Chart with Salary
      </button>
      <button onClick={() => naigate("/charts/yoe")}>
        Chart with Years of Experience
      </button>
    </div>
  );
};
