import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-ffull w-full">
      <div className="justify-center items-center">
        <p className="text-2xl mb-4">You've navigated to a wrong page.</p>
        <Link to="/">
          <button className="bg-gray-800">Go home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
