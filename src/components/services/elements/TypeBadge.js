import React from "react";

const TypeBadge = ({ offerAdvert }) => {
  if (offerAdvert === true) {
    return (
      <div>
        <span className="px-2 py-1 bg-cyan-500 rounded-full font-medium opacity-90">Oferta</span>
      </div>
    );
  } else {
    return (
        <div>
          <span className="px-2 py-1 bg-orange-500 rounded-full text-white font-medium opacity-90">Búsqueda</span>
        </div>
      );
    }
};

export default TypeBadge;
