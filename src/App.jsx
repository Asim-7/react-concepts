import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Counter from "./pages/Counter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default App;
