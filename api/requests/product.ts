import axios from "axios";
import { ProductReq } from "../types/product";
import { privateInstance } from "./config";

type Add = {
  token: string;
  body: ProductReq;
};
const addProduct = ({ token, body }: Add) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.post("/products/add", body)
};

export { addProduct };
