import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ item, icon, route }) => {
  const linkClass = (isActive) => {
    isActive ? "bg-gray-800" : "";
  };

  return (
    <NavLink
      to={`${route}`}
      className={`flex items-center rounded-md p-4 my-1 hover:bg-gray-800 hover:cursor-pointer ${linkClass} `}
    >
      <FontAwesomeIcon className="mr-4" icon={icon} />
      <p className="text-1xl text-gray-100">{item}</p>
    </NavLink>
  );
};

export default SideBarItem;
