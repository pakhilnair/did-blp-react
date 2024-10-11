import Card from "../components/Card";
import SubjectProgressionChart from "../components/SubjectProgressionChart";
import PerfAtBlChart from "../components/PerfAtBlChart";
import PerfAtSchChart from "../components/PerfAtSchChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import SubjectAbility from "../components/SubjectAbility";
import Remarks from "../components/Remarks";

const Learning = () => {
  const remarks = [
    {
      teacherName: "Ambaan",
      avatar: "../src/assets/teacher1.png",
      postedDate: "26/07/2024",
      subject: "Social",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis quam distinctio assumenda deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis quam distinctio assumenda deserunt.",
    },
    {
      teacherName: "Sweety",
      avatar: "../src/assets/teacher2.png",
      postedDate: "13/07/2024",
      subject: "English",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis.",
    },
    {
      teacherName: "Ashish",
      avatar: "../src/assets/teacher3.png",
      postedDate: "19/08/2024",
      subject: "Science",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis quam distinctio assumenda deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis quam distinctio assumenda deserunt.",
    },
    {
      teacherName: "Mansoor",
      avatar: "../src/assets/teacher4.png",
      postedDate: "06/09/2024",
      subject: "Maths",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis.",
    },
  ];

  const subjectInfo = [
    { name: "Science", color: "bg-amber-500", value: 75 },
    { name: "Socials", color: "bg-teal-500", value: 45 },
    { name: "Maths", color: "bg-lime-500", value: 90 },
    { name: "English", color: "bg-rose-500", value: 25 },
  ];

  return (
    <div className="container md:flex mx-auto">
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
          {remarks.slice(0, 3).map((remark, index) => (
            <Remarks
              key={index}
              name={remark.teacherName}
              avatar={remark.avatar}
              postedDate={remark.postedDate}
              subject={remark.subject}
              message={remark.message}
            />
          ))}
          {remarks.length > 3 && (
            <div className="flex items-end justify-end">
              <button className="text-sm border-1 border-gray-600 cursor-pointer py-1 rounded-md">
                View all
              </button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Learning;
