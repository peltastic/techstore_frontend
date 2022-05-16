import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
const { v4: uuidv4 } = require("uuid");

const id = uuidv4();
const productImageRef = ref(storage, `images/${id}`);

export const uploadFile = (file: any) => {
  return uploadBytes(productImageRef, file);
};

