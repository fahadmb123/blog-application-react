
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBL2SqSl-yhks080k67eN3QsP-K60SQor4",
  authDomain: "blog-application-f5c5e.firebaseapp.com",
  projectId: "blog-application-f5c5e",
  storageBucket: "blog-application-f5c5e.firebasestorage.app",
  messagingSenderId: "322448546738",
  appId: "1:322448546738:web:2fb0b98f7c56a9991022ab",
  measurementId: "G-SGCH5402S3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);