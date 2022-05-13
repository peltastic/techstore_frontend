import axios from "axios";
export const baseUrl: string = "https://techstore7.herokuapp.com";
export const authInstance = axios.create({
  baseURL: baseUrl,
  headers: { "content-type": "application/json" },
});
