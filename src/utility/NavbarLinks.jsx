import React from "react";
import { RiHomeLine, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const NavbarLinks = ({ to, children }) => {
  const logos = {
    Home: <RiHomeLine />,
    Timeline: <RiTimeLine />,
    Stats: <TfiStatsUp />,
  };
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "py-1 px-2 md:px-4 rounded bg-[#244D3F] text-white" : ""
      }
      to={to}
    >
      <div className="flex flex-row justify-center items-center gap-1 text-sm md:text-base">
        {logos[children]}
        {children}
      </div>
    </NavLink>
  );
};

export default NavbarLinks;
