import { Routes, Route, Navigate } from "react-router-dom";
import CPanel from "./Pages/CPanel";
import Meetings from "./Pages/Meetings";
import MeetingsDetails from "./Pages/MeetingsDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CPanel />}>
        <Route index element={<Navigate to="meetings" />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="meetings/details/id/:id" element={<MeetingsDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
