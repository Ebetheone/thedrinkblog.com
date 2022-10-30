import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
