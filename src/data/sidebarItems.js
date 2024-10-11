import {
  faGauge,
  faHeartCircleCheck,
  faBookOpen,
  faBrain,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const sidebarItems = [
  { name: "Dashboard", icon: faGauge, route: "/" },
  { name: "Learning", icon: faBookOpen, route: "/learning" },
  { name: "Health", icon: faHeartCircleCheck, route: "/health" },
  { name: "Mind", icon: faBrain, route: "/mind" },
  { name: "Profile", icon: faUser, route: "/profile" },
];

export default sidebarItems;
