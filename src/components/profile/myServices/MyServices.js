import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyServices = (userId) => {
  const [services, setServices] = useState([]);

  //Busca y filtra los anuncios por ID
  useEffect(() => {
    async function getServiceDetail() {
      //TODO recoger el usuario y devolverlo
      const getUserId = () => {
        if (!userId) {
          return; //TODO recoger el id del usuario logueado
        } else {
          return userId;
        }
      };
      //Conexión con la api
      const connection = axios.create({
        baseURL: `${process.env.REACT_APP_API_BASE_URL}/services/`,
      });
      try {
        const allServices = await connection.get();
        const selectedServices = (adverts) => {
          return adverts.createdBy.userId === getUserId;
        };
        const filteredServices = allServices.data.filter(selectedServices);
        setServices(filteredServices);
      } catch (error) {
        console.error(error);
      }
    }
    getServiceDetail();
  }, [userId]);

  return (
    <div>
      {services.length ? (
        <div>
          Anuncios cargados ({services.length})
          {services.map((service) => {
            return (
              <li key={service.id}>
                <Link to={`/service/${service.id}`}>
                  <article>
                    <img src={service.advertImage} alt={service.name} />
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
