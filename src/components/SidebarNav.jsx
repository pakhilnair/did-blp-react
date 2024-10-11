import React from "react";
import { NavLink } from "react-router-dom";
import sidebarItems from "../data/sidebarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarNav = (toggleSidebar) => {
  return (
    <div
      className="flex flex-col py-10 pr-2 fixed top-0 left-0 h-full w-72 z-10 md:w-96 bg-gray-900 text-white transform 
                translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto"
    >
      <NavLink to="/">
        <img
          src="../../public/logo.png"
          alt="Brainloop logo"
          className="max-w-32 ml-10"
        />
      </NavLink>
      <div className="mt-10">
        {sidebarItems.map((item, index) => (
          <div onClick={() => toggleSidebar()}>
            <NavLink
              key={index}
              to={item.route}
              className={({ isActive }) =>
                `flex items-center py-4 pl-10 my-2 hover:bg-gray-800 hover:cursor-pointer rounded-e-lg
                ${isActive ? "bg-gray-800" : "bg-transparent"}`
              }
            >
              <FontAwesomeIcon className="mr-4" icon={item.icon} />
              <p className="text-1xl text-gray-100">{item.name}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
