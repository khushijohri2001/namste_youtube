import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
    <ScrollRestoration/>
      <Header />
      <div className="flex gap-10 bg-gray-50">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
