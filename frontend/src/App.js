import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoneFractureDetection from "./components/BoneFractureDetection";
import ReportPage from "./components/Report";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoneFractureDetection />} />
        <Route path="/report" element={<ReportPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
