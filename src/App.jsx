import "./App.css";
import UserLayout from "./layout/UserLayout";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <NavBar />
      <div className="container flex p-4 mx-auto space-x-4">
        <UserLayout />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
