import React from "react";
import { Outlet } from "react-router-dom";

const LayoutOutlet = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-slate-100 mb-3 border-b p-3 ">Header</div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="h-16 mb-3 border-t p-3">Footer</div>
    </div>
  );
};

export default LayoutOutlet;
