import client from "./client";

const path = "/adverts";

export const getAdverts = () => {
  return client.get(path);
};

export const createAdvert = (advertData, headers) => {
  return client.post(
    path,
    advertData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const getTags = () => {
  const url = `${path}/tags`;
  return client.get(url);
};

export const getPaymentMethods= () => {
  const url = `${path}/paymentMethods`;
  return client.get(url);
};

export const getUserName = (id) => {
  const url = `auth/${id}`
  let user = client.get(url)
  return user
}

export const removeAd = (id) => {
  const url = `${path}/delete/${id}`
  let user = client.delete(url)
  return user
}