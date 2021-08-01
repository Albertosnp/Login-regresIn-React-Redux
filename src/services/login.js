import axios from "axios";

//Para la autenticación del usuario -> Devuelve booleano en forma de promesa
const baseUrl = "https://reqres.in/api/login";
export const loginUser = async (email, password) => {
  let response = {};
  try {
    response = await axios.post(baseUrl, {
      email,
      password,
    });
  } catch (error) {
    console.log("Error al conectar");
  }

  //Si el usuario se ha autenticado correctamente se guarda el token en localStorage y devuelve true
  if (response.status === 200) {
    const { token } = response.data;
    localStorage.setItem("token", token);
    return true;
  }
  //Si no ha logueado correctamente devuelve false
  return false;
};

//Para el logout del usuario
export const logoutUser = () => {
  localStorage.removeItem("token");
};
