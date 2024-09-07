import Card from "../components/Card";

const Dashboard = () => {
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
              <p className="text-gray-500 text-sm">Class : 6th</p>
              <p className="text-gray-500 text-sm">Age : 12</p>
              <p className="text-gray-500 text-sm">Branch : Kochi</p>
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
          <p className="text-gray-500 text-sm mt-2">As on Sept. 11 2024</p>
        </Card>

        <Card title="MBT Indicator">
          <p className="text-md text-amber-500">Explorers - Virtuoso - ISTP</p>
          <p className="text-sm mt-2">
            Smart, Energetic, Very Perceptive. People who enjoy living on the
            edge
          </p>
        </Card>

        <Card title="Subject progression"></Card>
      </div>
      <div className="flex-col max w-2/3">
        <Card title="Learning style" />
        <Card title="Performance at Brainloop" />
      </div>
    </div>
  );
};

export default Dashboard;
