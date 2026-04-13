import React from "react";
import { NavLink } from "react-router";

const NavbarLinks = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "py-1 px-4 rounded bg-[#244D3F] text-white" : ""
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavbarLinks;
