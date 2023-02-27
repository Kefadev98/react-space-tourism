import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//design
import "./style/style.scss";
//Internal imports
import Home from "./features/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Destination from "./features/destination/Destination";
import Crew from "./features/crew/Crew";
import Technology from "./features/technology/Technology";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
