import axios from "axios";

//Para traer los usuarios de la api
const baseUrl = "https://reqres.in/api/users";
export const getAllUsers = async () => {
  const usersPage1 = await axios.get(`${baseUrl}?page=1`);
  const usersPage2 = await axios.get(`${baseUrl}?page=2`);
  return [...usersPage1.data.data, ...usersPage2.data.data];
};
