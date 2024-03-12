import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import Contest from './pages/Contest/Contest';
import Home from "./pages/Home/Home";
import Practice from './pages/Practice/Practice';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contest" element={<Contest />} />
          <Route path="/Appliedjobs" element={<AppliedJobs />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
