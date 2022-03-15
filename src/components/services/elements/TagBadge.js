import React from "react";
import { Link } from "react-router-dom";

const TagBadge = ({ children }) => {
  return (
    <li className="mr-2 p-2">
      <Link to={`/services/tag/${children}`}>
        {children}
      </Link>
    </li>
  );
};

export default TagBadge;
