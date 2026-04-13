import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      This page not found{" "}
      <NavLink to={"/"} className="btn btn-primary">
        go Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
