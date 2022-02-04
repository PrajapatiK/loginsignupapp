import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Dashboard />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
