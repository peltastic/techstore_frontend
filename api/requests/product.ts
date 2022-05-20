import axios from "axios";
import { ProductReq } from "../types/product";
import { privateInstance, publicInstance } from "./config";

type Add = {
  token: string;
  body: ProductReq;
};

const addProduct = ({ token, body }: Add) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.post("/products/add", body);
};

const getProducts = ({ category, type }: any) => {
  return publicInstance.get(`/products/${category}/${type}`);
};

const getProduct = ({ table, id }: any) => {
  if (table && id) {
    return publicInstance.get(`/products/product/${table}/${id}`);
  }
};

export { addProduct, getProducts, getProduct };
