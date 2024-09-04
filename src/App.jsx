import "./App.css";
import UserLayout from "./layout/UserLayout";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <NavBar />
      <div className="container flex p-4 mx-auto space-x-4">
        <UserLayout />
        <Card />
      </div>
    </>
  );
}

export default App;
