import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
