import { Routes, Route } from "react-router-dom";

import Header from "./header";
import Sidebar from "./sidebar";
import Appointments from "./appointments";
import Pets from "./pets";
import Login from "./login";
import ProtectedRoute from "./helpers/ProtectedRoute";

function App() {
  return (
    <div className="font-inter grid grid-cols-[386px_auto]">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/consultas"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pets"
          element={
            <ProtectedRoute>
              <Pets />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
