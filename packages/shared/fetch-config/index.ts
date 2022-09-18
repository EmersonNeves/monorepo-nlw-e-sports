import axios from "axios";
const api = axios("http://192.168.2.103:8000/games").then(
  (response) => response.data
);

export default api;
