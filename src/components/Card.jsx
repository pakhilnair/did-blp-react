import { faC, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Card = ({ title, children, tooltipText = null, customStyle }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showToolTip = () => setIsVisible(true);
  const hideToolTip = () => setIsVisible(false);

  return (
    <div
      className={`${customStyle} h-fit p-4 mx-2 mb-4 mt-1 bg-gray-800 bg-opacity-60 rounded-md`}
    >
      {title && (
        <>
          <div className="flex justify-between items-center relative">
            <h2 className="font-bold text-1xl">{title}</h2>
            {tooltipText && (
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faCircleInfo}
                size="md"
                onMouseEnter={showToolTip}
                onMouseLeave={hideToolTip}
              />
            )}
            {isVisible && (
              <div className="absolute top-full right-0 z-10 shadow-lgp-1 bg-gray-600 text-sm rounded-md py-2 px-4 mt-2 max-w-72">
                {tooltipText}
                <div
                  className="absolute right-1 transform -translate-y-8 translate-x-0 w-0 h-0 
                border-l-4 border-l-transparent border-r-4 border-transparent 
                border-b-4 border-b-gray-600"
                ></div>
              </div>
            )}
          </div>
          <div className="flex-grow border-t border-gray-700 my-2 pb-1" />
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
