import { signupReq, signinReq } from "../types/auth";
import { authInstance } from "./config";
import { baseUrl } from "./config";
import axios from "axios";

const signUp = async (body: signupReq) => {
  return authInstance.post("/auth/signup", body);
};

const login = async (body: signinReq) => {
  return authInstance.post("/auth/login", body);
};

const user = async (token: string | null) => {
  return axios({
    method: "get",
    url: baseUrl + "/auth/user",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { signUp, login, user };
