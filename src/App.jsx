import "./App.css";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Learning from "./pages/Learning";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // return <RouterProvider router={router} />;
  // <>
  //   <NavBar />
  //   <div className="container flex p-4 mx-auto md:space-x-4">
  //     <UserLayout />
  //     <Dashboard />
  //   </div>
  // </>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
