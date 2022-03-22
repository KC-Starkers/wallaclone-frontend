import client from "../client";

const path = "/adverts"

export const getAdverts = () => {
  return client.get(path);
};

export const getTags = () => {
  return client.get(`${path}/tags`);
};

export const createAdvert = (formData) => {
  return client.post(path, formData);
};

