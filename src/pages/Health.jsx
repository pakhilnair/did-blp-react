import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import HealthScoreTable from "../components/HealthScoreTable";
import { testDates, tableData } from "../data/HealthScoreTableData";
import { doctorAnalysis, healthCheckupData } from "../data/healthCheckupsData";
import HealthCheckupCard from "../components/HealthCheckupCard";

const Health = () => {
  return (
    <div className="container md:flex mx-auto">
      <div className="flex flex-col w-full md:w-8/12">
        <Card
          title="Health score"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis
          quam distinctio assumenda deserunt."
        >
          <div className="flex">
            <p className="text-md w-1/3">
              <span className="text-amber-500 text-lg">65%, </span>Healthy
              weight
            </p>
            <p className="text-sm mt-2  w-1/3">
              Weight : <span className="font-bold">50kg</span>
            </p>
            <p className="text-sm mt-2 w-1/3">
              Height : <span className="font-bold">145cm</span>
            </p>
          </div>
        </Card>

        <Card
          title="Health metrics"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis
          quam distinctio assumenda deserunt."
        >
          <HealthScoreTable testDates={testDates} tableData={tableData} />
        </Card>
      </div>

      <div className="flex flex-col w-full md:w-4/12">
        <Card
          title="Health checkups"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis
          quam distinctio assumenda deserunt."
        >
          <div className="grid grid-cols-2">
            <HealthCheckupCard healthCheckupData={healthCheckupData} />
          </div>
        </Card>
        <Card
          title="Doctor's analysis"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis
          quam distinctio assumenda deserunt."
        >
          <p className="text-sm">{doctorAnalysis}</p>
        </Card>
      </div>
    </div>
  );
};

export default Health;
