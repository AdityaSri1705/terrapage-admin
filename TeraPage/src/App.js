import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components

import AdminHome from "./Pages/Admin";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </>
  );
}
