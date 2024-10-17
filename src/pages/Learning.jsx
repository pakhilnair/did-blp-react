import Card from "../components/Card";
import SubjectProgressionChart from "../components/SubjectProgressionChart";
import PerfAtBlChart from "../components/PerfAtBlChart";
import PerfAtSchChart from "../components/PerfAtSchChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import SubjectAbility from "../components/SubjectAbility";
import Remarks from "../components/Remarks";
import { useState, useEffect, useRef } from "react";
import SidebarRemarks from "../components/SidebarRemarks";
import subjectInfo from "../data/subjectInfo";
import teachersRemarks from "../data/teachersRemarks.js";

const Learning = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container md:flex mx-auto ">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div className="flex flex-col w-full md:w-8/12">
        <Card
          title="Learning style"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
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

        <Card
          title="Performance at Brainloop"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
          customStyle="h-96"
        >
          <PerfAtBlChart />
        </Card>

        <Card
          title="Performance at School"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
          customStyle="h-96"
        >
          <PerfAtSchChart />
        </Card>
      </div>

      <div className="flex flex-col w-full md:w-4/12">
        <Card
          title="Subject progression"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          {subjectInfo.map((subject) => (
            <SubjectProgressionChart
              key={subject.name}
              color={subject.color}
              value={subject.value}
              subject={subject.name}
            />
          ))}
        </Card>

        <Card
          title="Subject ability graph"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          <SubjectAbility />
        </Card>

        <Card title="Remarks from teachers">
          {teachersRemarks.slice(0, 3).map((remark, index) => (
            <Remarks
              key={index}
              name={remark.teacherName}
              avatar={remark.avatar}
              postedDate={remark.postedDate}
              subject={remark.subject}
              message={remark.message}
            />
          ))}

          {teachersRemarks.length > 3 && (
            <div className="flex items-end justify-end">
              <button
                className="text-sm w-28 border-1 border-gray-600 cursor-pointer py-1 rounded-md"
                onClick={toggleSidebar}
              >
                View all
              </button>
            </div>
          )}
          {isSidebarOpen && (
            <SidebarRemarks
              teachersRemarks={teachersRemarks}
              toggleSidebar={toggleSidebar}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Learning;
