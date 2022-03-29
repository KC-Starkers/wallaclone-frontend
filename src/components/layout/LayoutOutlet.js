import React from "react";
import { Outlet } from "react-router-dom";
import useFilter from "../hooks/useFilter";
import Header from "./header";

const LayoutOutlet = () => {
  const loadedAdverts = useFilter().value
  const handleChange= useFilter().handleChange
  
  return (
    <div className="flex flex-col h-screen">
      <div className="mb-3 sticky top-0 z-10">
        <Header value={loadedAdverts} change={handleChange}/>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="h-16 mb-3 border-t p-3">Footer</div>
    </div>
  );
};


export default LayoutOutlet;
