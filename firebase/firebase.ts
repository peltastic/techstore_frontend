import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { config } from "../config/config";

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: "tech-store-images.appspot.com",

  appId: config.APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
