import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ item, icon }) => {
  return (
    <div
      className={`flex items-center rounded-md p-4 my-1 hover:bg-gray-800 hover:cursor-pointer active:bg-gray-800 ${
        item === "Dashboard" ? "bg-gray-800" : ""
      }`}
    >
      <FontAwesomeIcon className="mr-4" icon={icon} />
      <p className="text-1xl text-gray-100">{item}</p>
    </div>
  );
};

export default SideBarItem;
