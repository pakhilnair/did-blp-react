const Remarks = ({ avatar, name, postedDate, subject, message }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex items-center">
        <div className="w-1/6 m-1">
          <img
            src={`${avatar}`}
            alt="teacher-avatar"
            className="user-avatar max-w-10"
          />
        </div>
        <div className="w-5/6">
          <p className="bold text-md">
            {name + "  "}
            <span className="bold text-sm text-gray-300">({subject})</span>
          </p>
          <p className="text-xs text-gray-400">Posted on {postedDate}</p>
        </div>
      </div>

      <div className="text-gray-300 text-sm pt-1">{message}</div>
    </div>
  );
};

export default Remarks;
