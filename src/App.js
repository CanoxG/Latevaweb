import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home/Home";
import BaseLayout from "./components/layout/BaseLayout";
import Company from "./pages/company/company/Company";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='company' element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
