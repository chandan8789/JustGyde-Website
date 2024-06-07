import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </>
  );
};

export default App;
