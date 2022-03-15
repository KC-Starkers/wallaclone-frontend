import React, { useEffect, useState } from "react";
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md"
import axios from "axios";

const FavButton = (data) => {
  const [profile, setProfile] = useState({});
  const [isFav, setIsFav] = useState();
  const [favs, setFavs] = useState([]);

  //TODO Refactorizar para agrupar en un archivo las conexiones
  const userId = data.ids.user;
  const url = `${process.env.REACT_APP_API_BASE_URL}/profiles/${userId}`;
  const token = "" //TODO recibir token
  const auth = `Bearer ${token}`;

  useEffect(() => {
    const connection = axios.get(url);
    const getProfile = async () => {
      try {
        const profile = (await connection).data;
        setProfile(profile);
        const favs = profile.favorites;
        setFavs(profile.favorites);
        setIsFav(favs.find((fav) => fav === data.ids.service));
      } catch (error) {}
    };
    getProfile();
  }, [data.ids.service, data.ids.user, url]);

  //Función de acción que cambia si es favorito o no este anuncio
  const favToggle = () => {
    try {
      const putProfile = async (data) =>
        await axios.put(url, data, { headers: { Authorization: auth } });

      if (isFav) {
        const updatedFavs = favs.filter((saved) => saved !== data.ids.service);
        const updatedProfile = { ...profile, favorites: updatedFavs };
        putProfile(updatedProfile);
        setIsFav(false)
      } else {
        const newFav = [...favs, data.ids.service];
        const updatedProfile = { ...profile, favorites: newFav };
        putProfile(updatedProfile);
        setIsFav(true)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={favToggle} style={{fontSize: "2em", display: "flex", borderRadius: "50%", border: "none", padding: "0.5rem", margin: "0.5rem"}}>
      {isFav ? <MdFavorite style={{color: "red"}}/> : <MdOutlineFavoriteBorder/>}
    </button>
  );
};

export default FavButton;
