import React from "react";
import { Link } from "react-router-dom";

const TagBadge = ({ children }) => {
  return (
    <li className="mr-2">
      <Link to={`/services/tag/${children}`} className="px-2 py-1 font-medium bg-slate-300 rounded-full opacity-80 hover:opacity-100">
        {children}
      </Link>
    </li>
  );
};

export default TagBadge;
