import React from "react";
import Remarks from "./Remarks";

const SidebarRemarks = ({ teachersRemarks, toggleSidebar }) => {
  return (
    <div
      className="flex flex-col p-10 fixed top-0 right-0 h-full w-80 z-10 md:w-96 bg-gray-900 text-white transform 
            translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto"
    >
      <div className="flex justify-end">
        <button
          className="text-lg cursor-pointer"
          onClick={() => toggleSidebar()}
        >
          X
        </button>
      </div>
      <div>
        {teachersRemarks.map((remark, index) => (
          <Remarks
            key={index}
            name={remark.teacherName}
            avatar={remark.avatar}
            postedDate={remark.postedDate}
            subject={remark.subject}
            message={remark.message}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarRemarks;
