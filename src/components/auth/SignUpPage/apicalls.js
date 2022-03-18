import client from "../../../client";

const path = "/auth";

export const signUp = (userData) => {
  return client
    .post(path, userData)
    .then((response) => response.result)
    .cath((error) => console.log(error)); //TODO: hacer dispatch de este error
};


