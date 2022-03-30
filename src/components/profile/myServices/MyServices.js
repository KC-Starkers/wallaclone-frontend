import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AdvertCard from "../../common/AdvertCard";
import { IoMdAdd } from "react-icons/io";
import ButtonBack from "../../common/ButtonBack";

const MyServices = () => {
  const [services, setServices] = useState([]);

  const userId = useParams().idUsuario;
  console.log(userId);

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
      } catch (error) {}
    }
    getServiceDetail();
  }, []);

  return (
    <div>
      <header className="p-3 flex">
        <ButtonBack />
        <h1 className="font-medium text-3xl text-center flex-auto">
          {userId ? `Anuncios de ${userId}` : 'Mis anuncios'}
        </h1>
      </header>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 p-3">
        {!userId ? (
          <li className="col-span-full sm:col-span-1 w-full h-full rounded-lg border border-dashed text-slate-500">
            <Link
              to={"/servicios/crear"}
              className="flex justify-center items-center content-center flex-col w-full h-full p-5 opacity-80 hover:opacity-100 transition-all ease-in-out delay-100"
            >
              <IoMdAdd className="text-5xl" />
              Crear anuncio
            </Link>
          </li>
        ) : (
          ""
        )}
        {services.length > 0
          ? services.map((advert) => (
              <li
                key={advert._id}
                className="col-span-full sm:col-span-1 w-full inline-block"
              >
                <AdvertCard advert={advert} />
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default MyServices;
