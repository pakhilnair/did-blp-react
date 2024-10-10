import {
  faGauge,
  faHeartCircleCheck,
  faBookOpen,
  faBrain,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const userLayout = () => {
  const sidebarItems = [
    { name: "Dashboard", icon: faGauge, route: "/" },
    { name: "Learning", icon: faBookOpen, route: "/learning" },
    { name: "Health", icon: faHeartCircleCheck, route: "/health" },
    { name: "Mind", icon: faBrain, route: "/mind" },
    { name: "Profile", icon: faUser, route: "/profile" },
  ];

  return (
    <>
      <NavBar />
      <div className="container flex p-4 mx-auto md:space-x-4">
        <div className="sidebar h-screen hidden md:block">
          <div className="flex-col justify-evenly">
            {sidebarItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.route}
                className={({ isActive }) =>
                  `flex items-center rounded-md p-4 my-1 hover:bg-gray-800 hover:cursor-pointer 
                ${isActive ? "bg-gray-800" : "bg-transparent"}`
                }
                end
              >
                <FontAwesomeIcon className="mr-4" icon={item.icon} />
                <p className="text-1xl text-gray-100">{item.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default userLayout;
