import axios from "axios";

//Para la autenticación del usuario
const baseUrl = "https://reqres.in/api/login";
export const loginUser = async (email, password) => {
  const response = await axios.post(baseUrl, {
    email,
    password,
  });
  return response;
};

//Para el logout del usuario
export const logoutUser = () => {
  localStorage.removeItem("token");
};
