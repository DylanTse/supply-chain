import firebase from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

// Initializes the firebase 
const app = firebase.initializeApp({
    apiKey: "AIzaSyBkLRYj8REpeXhKcz7t9bcM9hALDhdODi0",
    authDomain: "fa22-convergent-supply-chain.firebaseapp.com",
    projectId: "fa22-convergent-supply-chain",
    storageBucket: "fa22-convergent-supply-chain.appspot.com",
    messagingSenderId: "770881793832",
    appId: "1:770881793832:web:aac97ef33eaf0c6deeea1d",
    measurementId: "G-PBLVTNS0JN"
  })
  
  export default app
  export const auth = app.auth()

// Creates the const for authentication
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  function SignIn(){
    const signInWithEmailAndPassword = () => {
      const provider = new app.auth.signInWithEmailAndPassword
    }

    return (
      <button onClick={signInWithEmailAndPassword}>Sign In With Email and Password</button>
    )
  }