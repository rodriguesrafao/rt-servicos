import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { toast } from "react-toastify";


const firebaseConfig = {
  
};

// Inicialize o Firebase com as credenciais
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const onError = (error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  toast.error(`${errorCode} - ${errorMessage}`);
}
