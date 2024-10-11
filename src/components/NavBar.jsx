import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarNav from "./SidebarNav";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="container p-6 mx-auto">
      <div className="container md:flex mx-auto ">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
      <div className="flex items-center justify-between md:justify-items-center">
        <div className="md:hidden pr-2" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        {isSidebarOpen && <SidebarNav toggleSidebar={toggleSidebar} />}
        <NavLink to="/">
          <img
            src="../../public/logo.png"
            alt="Brainloop logo"
            className="max-w-28 md:max-w-36"
          />
        </NavLink>

        <div className="hidden md:flex items-center">
          <p className="text-sm">Raman Kartha</p>
          <p className="pl-1">
            <FontAwesomeIcon icon={faChevronDown} size="sm" />
          </p>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
