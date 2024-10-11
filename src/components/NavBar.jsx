import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container p-6 mx-auto">
      <div className="flex items-center justify-between md:justify-items-center">
        <div className="md:hidden pr-2">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        <NavLink to="/">
          {/* <div className="flex items-center">
            <p className="md:hidden text-3xl pr-2">
              <FontAwesomeIcon icon={faBars} />
            </p>
            <div className="flex-col">
              <p className="text-xs text-blue-600">BRAINLOOP</p>
              <p className="text-sm md:text-1xl">Deep identification</p>
            </div>
          </div> */}

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
