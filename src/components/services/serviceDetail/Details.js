import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TagBadge, TypeBadge, TagList } from "../elements";
import axios from "axios";

const Details = () => {
  //captura el id de la URL
  const idService = useParams().idServicio;

  //funcion que utilizaremos para el botón volver
  const navigate = useNavigate();

  //Definimos los datos que va a contener la estructura para evitar errores de "undefined"
  const [service, setService] = useState({
    name: "",
    offerAdvert: true,
    description: "",
    price: 0,
    paymentMethod: [],
    tags: [],
    experience: 0,
    advertImage: "",
    createdBy: {},
  });

  //Actualiza service para añadir los datos del servicio cargado
  useEffect(() => {
    async function getServiceDetail(id) {
      //Conexión con la api
      const connection = axios.create({
        baseURL: `${process.env.REACT_APP_API_BASE_URL}/services/`,
      });
      try {
        const serviceDetail = await connection.get(id);

        setService(serviceDetail.data);
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

      {/* Botón guardar en favoritos */}

      <Link to={`/perfil/${service.createdBy.userId}`}>
        creado por {service.createdBy.name}
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
