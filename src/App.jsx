
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

import React, { useEffect, useState } from "react";
import Header from "./pages/Header.jsx";
import { PanierContextProvider } from "./store/panier-context.jsx";

function App() {
 
  const  [products, setProducts] = useState([]);
      async function getProducts() {
        const request = await fetch("https://127.0.0.1:8000/api/products?page=1");
        const response = await request.json();
        const data = response.member;
        console.log(data);
    
        setProducts(data);
      }
  
      useEffect(()=> {
          getProducts();
      }, []);

  return (
    <>
    <PanierContextProvider>
     <Header products={products} setProducts={setProducts} />
      <Routes>
        <Route path="/" element={<Home products={products} setProducts={setProducts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket products={products} setProducts={setProducts} />} />
        <Route path="/history" element={<History />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
      </PanierContextProvider>
    </>
  );
}

export default App;
