import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
const { v4: uuidv4 } = require("uuid");

export const uploadFile = (file: any) => {
  const id = uuidv4();
  const productImageRef = ref(storage, `images/${id}`);
  return uploadBytes(productImageRef, file);
};
