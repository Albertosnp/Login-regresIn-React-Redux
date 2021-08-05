import axios from "axios";

//Para la autenticación del usuario -> Devuelve booleano en forma de promesa
const baseUrl = "https://reqres.in/api/login";
export const loginUser = async (email, password) => {
  const { data } = await axios.post(baseUrl, {
    email,
    password,
  });
  return data;
};

//Para el logout del usuario
export const logoutUser = () => {
  localStorage.removeItem("token");
};
