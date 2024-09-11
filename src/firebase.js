
import { initializeApp } from "firebase/app";
import {signOut, getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast"
// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyDTgAXXIR6JGOSBWCx22Q_9a5XGBZqiQtY",
  authDomain: "reactpro-6843c.firebaseapp.com",
  projectId: "reactpro-6843c",
  storageBucket: "reactpro-6843c.appspot.com",
  messagingSenderId: "215367877762",
  appId: "1:215367877762:web:40ff16bace8e264ecba09b"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Kullanıcı kaydı fonksiyonu
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message)
  }
};

export const login=async(email,password)=>{
  try{
const {user}=await signInWithEmailAndPassword(auth,email,password)
  return user
}catch(error){
    toast.error(error.message)
  }
}
export const logout=async()=>{
  try{
await signOut(auth)
  return true
}catch(error){
    toast.error(error.message)
  }
}
export default app;
