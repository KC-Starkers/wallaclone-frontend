import client from "./client";

const path = "/adverts";

export const getAdverts = () => {
  return client.get(path);
};

export const postAdvert = (advertData) =>{
  return client.post(path, advertData )   
}

export const getTags = () => {
      const url = `${path}/tags`
      return client.get(url)
  }
