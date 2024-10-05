import { faC, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, children, customStyle }) => {
  return (
    <div
      className={`${customStyle} h-fit p-4 mx-2 mb-4 mt-1 bg-gray-800 bg-opacity-60 rounded-md`}
    >
      {title && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-1xl">{title}</h2>
            <FontAwesomeIcon className="has-tooltip" icon={faCircleInfo}>
              <span className="tooltip rounded shadow-lgp-1 bg-gray-100 text-red-300 mt-6">
                Test
              </span>
            </FontAwesomeIcon>
          </div>
          <div className="flex-grow border-t border-gray-700 my-2 pb-1" />
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
