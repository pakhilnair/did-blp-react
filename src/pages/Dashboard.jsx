import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import SubjectProgressionChart from "../components/SubjectProgressionChart";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "../components/PerformanceChart";

const Dashboard = () => {
  const subjectInfo = [
    { name: "Science", color: "bg-amber-500", value: 75 },
    { name: "Socials", color: "bg-teal-500", value: 45 },
    { name: "Maths", color: "bg-lime-500", value: 90 },
    { name: "English", color: "bg-rose-500", value: 25 },
  ];
  return (
    <div className="container flex">
      <div className="flex-col max w-5/12">
        <Card>
          <div className="flex ">
            <div className="w-1/3 mr-2">
              <img
                src="../src/assets/avatar.png"
                alt="user-avatar"
                className="user-avatar"
              />
            </div>
            <div className="w-7/12 ml-2">
              <p className="text-lg py-2">
                Welcome
                <br />
                <strong>Ranga Annan</strong>
              </p>
              <p className="text-gray-400 text-sm">Class : 6th</p>
              <p className="text-gray-400 text-sm">Age : 12</p>
              <p className="text-gray-400 text-sm">Branch : Kochi</p>
            </div>
          </div>
        </Card>

        <Card title="Attendance">
          <p className="text-md">
            Classes attended :{" "}
            <span className="text-amber-500 text-lg">55</span>
          </p>
          <p className="text-md">
            Total classes : <span className="text-amber-500 text-lg">60</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">As on Sept. 11 2024</p>
        </Card>

        <Card title="MBT Indicator">
          <p className="text-md text-amber-500">Explorers - Virtuoso - ISTP</p>
          <p className="text-sm mt-2">
            Smart, Energetic, Very Perceptive. People who enjoy living on the
            edge
          </p>
        </Card>

        <Card title="Subject progression">
          {subjectInfo.map((subject) => (
            <SubjectProgressionChart
              key={subject.name}
              color={subject.color}
              value={subject.value}
              subject={subject.name}
            />
          ))}
        </Card>

        <Card title="Health score">
          <p className="text-md">
            <span className="text-amber-500 text-lg">65%, </span>Healthy weight
          </p>
          <p className="text-sm mt-2">Weight : 50kg</p>
          <p className="text-sm mt-2">Height : 145cm</p>
        </Card>
      </div>

      <div className="flex-col max w-2/3">
        <Card title="Learning style">
          <div className="flex items-center">
            <FontAwesomeIcon className="p-2 mr-2" icon={faEye} size="2x" />
            <div>
              <p className="text-md mb-1">Ranga is a visual leraner</p>
              <p className="text-sm text-gray-400 h-">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat quidem unde quisquam, animi debitis odio cumque.
              </p>
            </div>
          </div>
        </Card>

        <Card title="Performance at Brainloop" customStyle="h-96">
          <PerformanceChart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
