import client from "../../../api/client";

const advertsPath = '/adverts';

export const getAdverts = () => {
  return client.get(`${advertsPath}`);
};
