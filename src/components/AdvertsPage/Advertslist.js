import React, { useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import { getAdverts } from "./service";
import { useState } from "react";

function AdvertsList(){
    const { isLoading, error, data: adverts = [] } = useQuery(getAdverts);

    const [anuncios, getanuncios] = useState()
    useEffect(() => {
        getanuncios(adverts);
      }, []);
      console.log(anuncios)
      console.log(adverts)
      console.log(adverts.data)
    return (
        <p>{anuncios[1]}</p>
    )
}

export default AdvertsList