import axios from "axios";

//Para traer los usuarios de la api
const baseUrl = "https://reqres.in/api/users";
export const getAllUsersPerPage = async (page) => {
  const users = await axios.get(`${baseUrl}?page=${page}`);
  return [...users.data.data];
};
