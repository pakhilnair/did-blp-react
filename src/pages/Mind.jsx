import Card from "../components/Card";
import PersonalityProgress from "../components/PersonalityProgress";
import IntelligenceProgress from "../components/IntelligenceProgress";
import {
  eq,
  big5,
  intelligenceTypes,
  readingChartData,
  memoryChartData,
} from "../data/mindData";
import ReadingMemoryChart from "../components/ReadingMemoryChart";

const Mind = () => {
  return (
    <div className="container md:flex mx-auto">
      <div className="flex flex-col w-full md:w-4/12">
        <Card
          title="MBT Indicator"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          <p className="text-md text-amber-500">Explorers - Virtuoso - ISTP</p>
          <p className="text-sm mt-2">
            Smart, Energetic, Very Perceptive. People who enjoy living on the
            edge
          </p>
        </Card>

        <Card
          title="Emotional quotient"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          {eq.map((quarter, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 px-1 last:border-0 border-b border-gray-700"
            >
              <p>Quarter {index + 1}</p>
              <p className="border-4 border-green-500 rounded-2xl px-2 py-1">
                {quarter}
              </p>
            </div>
          ))}
        </Card>
        <Card
          title="Reading speed"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          <ReadingMemoryChart chartData={readingChartData} />
        </Card>
        <Card
          title="Memory graph"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          <ReadingMemoryChart chartData={memoryChartData} />
        </Card>
      </div>
      <div className="flex flex-col w-full md:w-8/12">
        <Card
          title="Big 5 personality"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          <div className="grid grid-cols-3">
            {big5.map((personality) => (
              <PersonalityProgress
                key={personality.metric}
                color={personality.color}
                metric={personality.metric}
                value={personality.value}
                link={personality.link}
              />
            ))}
          </div>
        </Card>
        <Card
          title="9 types of intelligence"
          tooltipText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia perferendis 
          quam distinctio assumenda deserunt."
        >
          <div className="grid grid-cols-3">
            {intelligenceTypes.map((personality) => (
              <IntelligenceProgress
                key={personality.metric}
                color={personality.color}
                metric={personality.metric}
                value={personality.value}
                link={personality.link}
                icon={personality.icon}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Mind;
