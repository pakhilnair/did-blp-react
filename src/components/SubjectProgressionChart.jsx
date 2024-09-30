const SubjectProgressionChart = ({ color, value, subject = "test" }) => {
  return (
    <div className="flex items-center my-4">
      <div className="w-1/4">
        <p>{subject}</p>
      </div>
      <div className="w-full h-6 bg-gray-700 rounded-md overflow-hidden relative">
        <div
          className={`h-full transition-all duration-300 ease-in-out ${color}`}
          style={{ width: `${value}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-white ">{value + "%"}</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectProgressionChart;
