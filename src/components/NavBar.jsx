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
          <div className="flex flex-col">
            <p className="text-xs text-blue-600">BRAINLOOP</p>
            <p className="text-1xl">Deep identification</p>
          </div>
        </div>
        <div className="flex">
          <p>Raman Kartha</p>
          <p className="pl-2">
            <FontAwesomeIcon icon={faChevronDown} />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
