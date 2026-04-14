import React from "react";
import { GiClawSlashes } from "react-icons/gi";
import { Link } from "react-router";
import NavbarLinks from "../utility/NavbarLinks";

const Navbar = () => {
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "timeline",
      title: "Timeline",
    },
    {
      path: "stats",
      title: "Stats",
    },
  ];
  return (
    <nav className=" bg-base-100 shadow-sm w-full sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="  flex flex-row justify-start items-center gap-0 text-2xl font-semibold">
            <span>Keen</span>
            <span className="text-[#244D3F]">Keeper</span>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-row justify-center items-center gap-4 text-gray-500">
            {links.map((link, index) => (
              <NavbarLinks key={index} to={link.path}>
                {link.title}
              </NavbarLinks>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
