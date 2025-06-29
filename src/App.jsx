import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoIosSearch } from "react-icons/io";
import "./assets/script.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Basket from "./pages/Basket.jsx";
import History from "./pages/History.jsx";
import Manage from "./pages/Manage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/history" element={<History />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </>
  );
}

export default App;
