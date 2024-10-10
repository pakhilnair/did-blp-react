import "./App.css";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Learning from "./pages/Learning";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
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
