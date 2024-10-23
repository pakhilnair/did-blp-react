const PersonalityProgress = ({ metric, link, color, value }) => {
  return (
    <div className="flex flex-col items-center my-6 bg-cy">
      <div className="relative size-20 md:size-28">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="rgb(6.67% 9.41% 15.29%)"
            className="stroke-current text-gray-200 dark:text-neutral-700"
            strokeWidth="3"
          ></circle>

          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={`stroke-current ${color}`}
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={`${100 - value}`}
            strokeLinecap="round"
          ></circle>
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-lg md:text-xl text-gray-200">
            {value}%
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 ">
        <p className="text-sm md:text-md">{metric}</p>
        <button className="text-xs text-gray-500 underline cursor-pointer -mt-1">
          <a href={`${link}`} target="_blank">
            Know more
          </a>
        </button>
      </div>
    </div>
  );
};

export default PersonalityProgress;
