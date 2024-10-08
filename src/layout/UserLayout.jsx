import {
  faGauge,
  faHeartCircleCheck,
  faBookOpen,
  faBrain,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SideBarItem from "../components/SideBarItem";

const userLayout = () => {
  const sidebarItems = [
    { name: "Dashboard", icon: faGauge, route: "/student/dashboard" },
    { name: "Learning", icon: faBookOpen, route: "/student/learning" },
    { name: "Health", icon: faHeartCircleCheck, route: "/student/health" },
    { name: "Mind", icon: faBrain, route: "/student/mind" },
    { name: "Profile", icon: faUser, route: "/student/profile" },
  ];
  return (
    <div className="sidebar h-screen hidden md:block">
      <div className="flex-col justify-evenly">
        {sidebarItems.map((item, index) => (
          <SideBarItem item={item.name} icon={item.icon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default userLayout;
