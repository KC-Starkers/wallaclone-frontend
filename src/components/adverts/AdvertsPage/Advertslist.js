import React, { useEffect } from "react";
import useQuery from "../../../hooks/useQuery";
import { getAdverts } from "../service";
import { useState } from "react";
import { Link } from "react-router-dom";

function AdvertsList({adverts}){
    /*
    const { isLoading, error, data: adverts = [] } = useQuery(getAdverts);

    const [anuncios, getanuncios] = useState()
    useEffect(() => {
        getanuncios(adverts.data);
      }, [anuncios]);
      console.log(adverts.data)
      */
     console.log(adverts)
     
    const renderAdvert = ({ id, ...advert }) => (
        <li key={id}>
          <Link to={`/adverts/${id}`}>
            <p>{advert.name}</p>
          </Link>
        </li>
      );
    return <ul>{adverts.map(renderAdvert)}</ul>
    }

export default AdvertsList