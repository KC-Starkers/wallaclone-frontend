import client from "../../client";

const path = "/adverts"

export const getAdverts = () => {
  return client.get(advertsPath);
};

export const getTags = () => {
  return client.get(`${path}/tags`);
};
