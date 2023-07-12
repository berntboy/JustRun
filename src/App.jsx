import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import RunHistory from "./components/RunHistory";

function App() {
  return (
    <Router>
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/runners/:id" element={<UserProfile />} />
        <Route exact path="/runhistory" element={<RunHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
