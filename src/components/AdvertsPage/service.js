import client from "../../api/client";

const advertsPath = '/servicios';

export const getAdverts = async () => {
    const adverts = await client.get(`${advertsPath}`);
    debugger
    console.log(adverts)
    //return adverts.map(mapAdvert);
  };
  