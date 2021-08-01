import axios from "axios";

const baseUrl = "https://reqres.in/api/login";

export const loginUser = async (email, password) => {
  const response = await axios.post(baseUrl, {
    email,
    password,
  });
  return response;
};
