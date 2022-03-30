import React from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

const ButtonBack = ({ className }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex content-center items-center border border-gray-200 px-2 py-1 rounded-lg opacity-80 hover:opacity-100 ${className}`}
    >
      <BiChevronLeft /> Volver
    </button>
  );
};

export default ButtonBack;
