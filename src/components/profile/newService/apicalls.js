import client from "../../../client";

const path = "/adverts/placeholder";    //TODO: cambiar por ruta real del backend

export const createService = (input) => {
  return client.post(path, input);
};

