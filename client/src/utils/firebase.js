
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "dem0-321.firebaseapp.com",
  projectId: "dem0-321",
  storageBucket: "dem0-321.firebasestorage.app",
  messagingSenderId: "866970518698",
  appId: "1:866970518698:web:a03a803083551a1e357cd3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}