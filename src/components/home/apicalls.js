import client from "../../client";

const url = `${process.env}/adverts`;

export const getAdverts = () => {
  return client.get(url);
};

