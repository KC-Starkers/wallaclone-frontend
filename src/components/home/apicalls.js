import client from "../../client";

const path = "/adverts";

export const getAdverts = () => {
  return client.get(path);
};


