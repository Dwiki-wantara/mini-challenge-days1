import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/:id" element={<Account />} />
    </Routes>
  );
}

export default App;
