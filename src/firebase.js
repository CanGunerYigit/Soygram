import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword,onAuthStateChanged,signOut,createUserWithEmailAndPassword} from   "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUXPmJcBgu3lM_Vtn3gFz3ohO4EVBLfh8",
  authDomain: "soygram-a98ba.firebaseapp.com",
  projectId: "soygram-a98ba",
  storageBucket: "soygram-a98ba.appspot.com",
  messagingSenderId: "1002829416716",
  appId: "1:1002829416716:web:1016e38cb82fd43e36a129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
onAuthStateChanged(auth,user=>{

     userHandle(user || false)
  

  }
)
export const login= async(email,password) => {
try{
  const response =  await  signInWithEmailAndPassword(auth,email,password) //kullanıcı kaydetme
 
}catch(err){
    toast.error(err.code)
}
}
export const register= async({email,password,fullname,username}) => {
  try{
    const response =  await  createUserWithEmailAndPassword(auth,email,password) 
  }catch(err){
      toast.error(err.code)
  }
  }
export const logout = async() => {
  try {                               //logout işlemi
    await signOut(auth) 
  }  catch(err) {                   
    toast.error(err.code)
  }
}

