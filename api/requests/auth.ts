import { signupReq, signinReq, refreshReq } from "../types/auth";
import { authInstance, privateInstance } from "./config";

const signUp = (body: signupReq) => {
  return authInstance.post("/auth/signup", body);
};

const login = (body: signinReq) => {
  return authInstance.post("/auth/login", body);
};
const refresh = (body: refreshReq) => {
  return authInstance.post("/auth/refresh", body);
};

const user = (token: string) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.get("auth/user");
};

export { signUp, login, user, refresh };
