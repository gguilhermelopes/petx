import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Header from "./header";
import Sidebar from "./sidebar";
import Appointments from "./appointments";
import Pets from "./pets";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") navigate("/consultas");
  }, [navigate, location]);

  return (
    <div className="font-inter grid grid-cols-[386px_auto]">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Appointments />} />
        <Route path="/consultas" element={<Appointments />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </div>
  );
}

export default App;
