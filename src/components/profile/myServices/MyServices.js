import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyServices = () => {
  const [services, setServices] = useState([]);

  //Busca y filtra los anuncios por ID
  useEffect(() => {
    async function getServiceDetail() {
      const userId = localStorage.getItem("userId");
      //Conexión con la api
      const connection = axios.create({
        baseURL: `${process.env.REACT_APP_API_BASE_URL}/adverts`,
      });

      try {
        const getServices = await connection.get();
        const allServices = getServices.data;
        const filteredServices = allServices.filter((service) => {
          return service.advertCreator === userId;
        });
        setServices(filteredServices);
      } catch (error) {
      }
    }
    getServiceDetail();
  }, []);

  return (
    <div>
      <Link to={"/crear"}>Crear anuncio</Link>

      {services.length ? (
        <div>
          {services.map((service) => {
            return (
              <li key={service._id}>
                <Link to={`/servicios/${service._id}`}>
                  <article>
                    <img
                      src={
                        process.env.REACT_APP_API_BASE_URL +
                        "/uploads/" +
                        service.advertImage
                      }
                      alt={service.name}
                    />
                    {/*TODO Cambiar por el elemento offertype badge */}
                    <div>{service.offerAdvert ? "Buscan" : "Ofrecen"}</div>
                    <div>{service.price}</div>
                    <h1>{service.name}</h1>
                  </article>
                </Link>
                <hr />
              </li>
            );
          })}
        </div>
      ) : (
        <div>
          No hay anuncios
          <br />
          <Link to={"/crear"}>Crear anuncio</Link>
        </div>
      )}
    </div>
  );
};

export default MyServices;
