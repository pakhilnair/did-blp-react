import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HealthScoreTable = ({ testDates, tableData }) => {
  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-left border-gray-700">
        <thead className="text-sm text-gray-300 uppercase bg-gray-800 border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              <p>Metrics</p>
              <p className="text-xs text-gray-500 font-light capitalize">
                Tested periodically
              </p>
            </th>
            {testDates.map((date, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                <p>Test 1</p>
                <p className="text-xs text-gray-500 font-light">{date}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((metric) => (
            <tr
              className="border-t dark:border-gray-700 text-sm"
              key={metric.metric}
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <FontAwesomeIcon className="mr-2" icon={metric.icon} />
                <p>{metric.metric}</p>
              </th>
              {metric.values.map((value, index) => (
                <td className="px-6 py-4" key={index}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthScoreTable;
