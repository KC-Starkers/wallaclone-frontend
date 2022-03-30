import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TagBadge, TypeBadge, TagList, FavButton } from "../elements";
import axios from "axios";
import ButtonBack from "../../common/ButtonBack";
import AdvertCard from "../../common/AdvertCard";
import { BsChatLeftDotsFill } from "react-icons/bs";
import StartChat from "../../common/StartChat";
import storage from "../../../utils/storage";

const Details = () => {
  //TODO Recibir si está logueado y pasarle el id de usuario
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

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
    <>
      <header className="p-3 flex mb-3">
        <ButtonBack />
        <h1 className="font-medium text-3xl text-center flex-auto">
          {service.name}
        </h1>
      </header>

      <div className="max-w-5xl mx-auto bg-slate-100 p-3 rounded-lg">
        <div className="grid md:grid-cols-2 gap-3 mx-auto">
          <div className="col-span-1">
            <AdvertCard advert={service} serviceView={true} />
          </div>
          <div className="col-span-1">
            <div className="mb-2">
              <Link
                to={`/perfil/${service.advertCreator}`}
                className="text-orange-300 hover:text-orange-500"
              >
                creado por {service.createdBy}
              </Link>
            </div>
            <TagList>
              {service.tags.map((tag) => (
                <TagBadge key={tag}>{tag}</TagBadge>
              ))}
            </TagList>

            {/* <FavButton ids={{ user: userId, service: service._id }} /> */}
            <br />
            {service.experience ? (
              <span>
                Experiencia{!service.offerAdvert ? " requerida" : null}:{" "}
                {service.experience} años
              </span>
            ) : (
              ""
            )}
            <Link
              to=""
              className="flex p-3 bg-orange-500 hover:bg-orange-400 transition-all ease-in-out delay-100' text-white justify-center content-center items-center rounded-lg"
            >
            {/*<BsChatLeftDotsFill className="mx-2" /> Abrir conversación
            [username, advert.createdBy, advert._id, advert.name]
            */}
            <StartChat chatId={[userName, service.createdBy, service._id, service.name]}/>
            </Link>
          </div>

          <p className="col-span-full">{service.description}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
