import { privateInstance } from "./config";
import { CartReq } from "../types/cart";
type Cart = {
  token: string;
  body: CartReq;
};

const addCart = ({ token, body }: Cart) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.post("/cart/add", body);
};
const getCart = ({ token, userId }: any) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.get(`cart/getcarts/${userId}`);
};

const increaseCart = ({ token, userId, productId }: any) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.put(`cart/update/increase/${userId}/${productId}`);
};

const decreaseCart = ({ token, userId, productId }: any) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.put(`cart/update/decrease/${userId}/${productId}`);
};
const checkCart = ({ token, userId, productId }: any) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return privateInstance.get(`cart/checkCart/${userId}/${productId}`);
};
export { addCart, getCart, increaseCart, decreaseCart, checkCart };
