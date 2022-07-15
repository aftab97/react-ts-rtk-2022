import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./Store/store";

import { getUsers } from "./Store/Users/usersSlice";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <div>App</div>;
};
