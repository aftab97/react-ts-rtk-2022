import React from "react";

import { Outlet } from "react-router-dom";

export const Chart = ({ users }: any) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
