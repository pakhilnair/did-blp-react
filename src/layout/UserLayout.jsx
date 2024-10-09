import {
  faGauge,
  faHeartCircleCheck,
  faBookOpen,
  faBrain,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SideBarItem from "../components/SideBarItem";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const userLayout = () => {
  const sidebarItems = [
    { name: "Dashboard", icon: faGauge, route: "/dashboard" },
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
              <SideBarItem item={item.name} icon={item.icon} key={index} />
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default userLayout;
