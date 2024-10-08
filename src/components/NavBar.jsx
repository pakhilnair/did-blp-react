import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="container p-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-3xl pr-2">
            <FontAwesomeIcon icon={faBars} />
          </p>
          <div className="flex-col">
            <p className="text-xs text-blue-600">BRAINLOOP</p>
            <p className="text-sm md:text-1xl">Deep identification</p>
          </div>
        </div>
        <div className="flex">
          <p className="text-xs md:text-sm">Raman Kartha</p>
          <p className="pl-1">
            <FontAwesomeIcon icon={faChevronDown} size="sm" />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
