import { signupReq, signinReq } from "../types/auth";
import { authInstance } from "./config";

const signUp = async (body: signupReq) => {
return authInstance.post("/auth/signup", body)
};

const login = async (body: signinReq) => {
 return authInstance.post("/auth/login", body)
};

export { signUp, login };
