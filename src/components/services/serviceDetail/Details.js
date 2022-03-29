import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TagBadge, TypeBadge, TagList, FavButton } from "../elements";
import axios from "axios";

const Details = () => {
  //TODO Recibir si está logueado y pasarle el id de usuario
  const userId = localStorage.getItem("userId");

  //captura el id de la URL
  const idService = useParams().idServicio;

  //funcion que utilizaremos para el botón volver
  const navigate = useNavigate();

  //Definimos los datos que va a contener la estructura para evitar errores de "undefined"
  const [service, setService] = useState({
    advertCreator: null,
    advertImage: null,
    createdAt: null,
    description: null,
    experience: null,
    name: null,
    offerAdvert: null,
    paymentMethods: [],
    price: null,
    publishState: null,
    tags: [],
    updatedAt: null,
    __v: null,
    _id: null,
  });

  //Actualiza service para añadir los datos del servicio cargado
  useEffect(() => {
    async function getServiceDetail(id) {
      //Conexión con la api
      const connection = axios.create({
        baseURL: `${process.env.REACT_APP_API_BASE_URL}/adverts/`,
      });
      try {
        const getService = await connection.get(id);
        const dataService = getService.data.result;
        setService(dataService[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getServiceDetail(idService);
  }, [idService]);

  return (
    <div>
      <button onClick={() => navigate(-1)}> Volver</button>
      <br />
      <img src={service.advertImage} alt={service.name} />
      <br />
      <TypeBadge offerAdvert={service.offerAdvert} />
      <br />
      <span>{service.price}</span>

      <h1>{service.name}</h1>

      <TagList>
        {service.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </TagList>

      <FavButton ids={{user: userId, service: service._id}} />

      <Link to={`/perfil/${service.advertCreator}`}>
        creado por {service.createdBy}
      </Link>

      {service.experience ? (
        <span>
          Experiencia{!service.offerAdvert ? " requerida" : null}:{" "}
          {service.experience} años
        </span>
      ) : ('')}

      <p>{service.description}</p>
    </div>
  );
};

export default Details;
