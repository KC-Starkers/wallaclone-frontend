import useQuery from "../../../hooks/useQuery";
import { getAdverts } from "../service";
import { useState, useEffect } from "react";
import AdvertsList from "./Advertslist";

function AdvertsPage(){
    
    const { isLoading, error, data: adverts = [] } = useQuery(getAdverts);
    const [anuncios, getanuncios] = useState()
    var a = adverts.data

    console.log(adverts.data)

    return (
        <div>
        <AdvertsList adverts={adverts.data} />
        </div>
    )
}

export default AdvertsPage;