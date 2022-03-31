import React from "react";
import { Link } from "react-router-dom";
import TypeBadge from "../services/elements/TypeBadge";

const AdvertCard = ({ advert, serviceView }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const bgImg = {
    backgroundImage: `url('${process.env.REACT_APP_API_BASE_URL}/images/${advert.advertImage}'), linear-gradient(305deg,#333 0%, #${randomColor} 100%)`,
    height: "150px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      {!serviceView ? (
        <Link
          to={`/servicios/${advert._id}`}
          className="rounded-lg bg-slate-100 inline-block w-full opacity-90 hover:opacity-100 ease-in duration-200"
        >
          <article>
            <div
              className="rounded-lg flex flex-col justify-between text-right p-3"
              style={bgImg}
            >
              <TypeBadge offerAdvert={advert.offerAdvert} />
              <div className="font-medium text-white">
                <span className="bg-black px-3 py-1 rounded-full opacity-80">
                  {advert.price}€
                </span>
              </div>
            </div>
            <h1 className="font-medium p-3">{advert.name}</h1>
          </article>
        </Link>
      ) : (
        <div
          className="rounded-lg flex flex-col justify-between text-right p-3"
          style={bgImg}
        >
          <TypeBadge offerAdvert={advert.offerAdvert} />
          <div className="font-medium text-white">
            <span className="bg-black px-3 py-1 rounded-full opacity-80">
              {advert.price}€
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertCard;
