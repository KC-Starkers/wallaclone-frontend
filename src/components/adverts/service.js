import client from "../../api/client";

const advertsPath = '/adverts';


const mapAdvert = ({ photo, ...advert }) => ({
  ...advert,
  photo: photo ? `${process.env.REACT_APP_API_BASE_URL}${photo}` : null,
});

export const getTags = () => {
  return client.get(`${advertsPath}/tags`);
};

export const getAdverts = async () => {
  const adverts = await client.get(`${advertsPath}`);
  
  //let mapedadverts = adverts.map(mapAdvert);
  return adverts
};