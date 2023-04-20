import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAYbVUbV5bCOxFBcUbAMo9h5AJ-hsSfKCI",
  authDomain: "dakotahome-d7765.firebaseapp.com",
  projectId: "dakotahome-d7765",
  storageBucket: "dakotahome-d7765.appspot.com",
  messagingSenderId: "469171176483",
  appId: "1:469171176483:web:6cdad4ae89bd09df829d96"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

export const auth  = getAuth(app)
