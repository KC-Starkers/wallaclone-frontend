import client from "../../../client";

const path = "/auth/signup";

export const signUp = (userData) => {
  return client
    .post(path, userData)
    .then((response) => response.result)
    .catch((error) => console.log(error)); //TODO: hacer dispatch de este error
};

