import client from "./client";

const path = "/adverts";

export const getAdverts = () => {
  return client.get(path);
};

export const postAdvert = (advertData) =>{
  return client.post(path, advertData )   //TODO: ¿tal cual así o desestructurado? 
}

export const getTags = () => {
      const url = `${path}/tags`
      //const url = '/api/v1/adverts/tags'
      return client.get(url)
  }
