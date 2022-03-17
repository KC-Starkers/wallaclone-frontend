import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts } from "../../store/actions";
import { Link } from "react-router-dom";
import { loadAdvertsSelector } from "../../store/selectors";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

  const adverts = useSelector(loadAdvertsSelector);
  console.log(adverts);

  return (
    /*   TODO: refactorizar en componente ServicesList */
    <ul>
      {adverts.map((advert) => (
        <>
          <li key={advert._id}>
            <Link to={`/adverts/${advert._id}`}>
              <div>
                <p>{advert.name}</p>
                <p>{advert.offerAdvert}</p>
                <p>{advert.description}</p>
                <p>{advert.tags.join("")}</p>
                <p>{advert.paymentMethod.join("")}</p>
                <p>{advert.experience}</p>
                <img src={advert.image} alt={advert.name} />
              </div>
            </Link>
          </li>
          {/*   <Search/>   */} {/* componente de búsqueda por filtros */}
        </>
      ))}
    </ul>
  );
}

export default Home;
