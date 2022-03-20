import client from "../../client";

const advertsPath = "/adverts";
const tagsPath = "/tags";

export const getAdverts = () => {
  return client.get(advertsPath);
};

export const getTags = () => {
  return client.get(tagsPath);
};
