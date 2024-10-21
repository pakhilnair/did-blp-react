import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HealthCheckupCard = ({ healthCheckupData }) => {
  return (
    <>
      {healthCheckupData.map((checkup, index) => (
        <div
          className={`py-4 border-gray-700 ${
            index % 2 !== 0 ? "border-l px-4" : ""
          } ${index > 1 ? "border-t" : ""}`}
          key={index}
        >
          <div className="flex items-center justify-start">
            <FontAwesomeIcon icon={checkup.icon} size="lg" className="mr-2" />
            <p>{checkup.checkup}</p>
          </div>
          <div className="mt-3 space-y-2">
            {checkup.dates.map((date, index) => (
              <p key={index} className="text-xs">
                {date}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HealthCheckupCard;
