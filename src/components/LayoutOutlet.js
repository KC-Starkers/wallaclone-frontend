import React from "react";
import { Outlet } from "react-router-dom";

const LayoutOutlet = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutOutlet;
