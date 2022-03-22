import client from "./client";

const path = "/adverts";

export const getAdverts = () => {
  return client.get(path);
};


export const getTags = () => {
      const url = `${path}/tags`
      //const url = '/api/v1/adverts/tags'
      return client.get(url)
  }

