import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TagBadge, TypeBadge, TagList } from "./";

const Details = () => {
  const service = {
    name: "limpieza de casa",
    offerAdvert: false,
    description:
      "Lorem fistrum te va a hasé pupitaa a gramenawer torpedo. Benemeritaar a peich caballo blanco caballo negroorl te va a hasé pupitaa ese que llega a gramenawer está la cosa muy malar tiene musho peligro. Ahorarr a gramenawer llevame al sircoo pupita jarl. Amatomaa qué dise usteer quietooor va usté muy cargadoo de la pradera ese hombree ahorarr sexuarl. Ese pedazo de pupita ese hombree me cago en tus muelas por la gloria de mi madre llevame al sircoo no te digo trigo por no llamarte Rodrigor fistro torpedo. ",
    price: 10,
    paymentMethod: ["cash", "debit", "credit"],
    tags: ["salud", "bienestar"],
    experience: 3,
    advertImage: "../../public/services/00001.jpg",
    createdBy: {
      name: "Luis",
      userId: 1,
    },
  };

  //const idService = useParams().idServicio; //TODO hacer conexiones con el backend para llamar al servicio
  //const service = buscarServicio(idService)

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}> Volver</button>
      <br />
      <img src={service.advertImage} alt={service.name} />
      <br />
      <TypeBadge offerAdvert={service.offerAdvert} />

      <h1>{service.name}</h1>

      <TagList>
        {service.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </TagList>

      {/* Guardar en favoritos */}

      <Link to={`/perfil/${service.createdBy.userId}`}>
        creado por {service.createdBy.name}
      </Link>
      <span>experiencia: {service.experience}</span>

      <p>
        {service.description}
      </p>
      

    </div>
  );
};

export default Details;
