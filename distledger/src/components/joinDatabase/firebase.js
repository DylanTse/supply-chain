import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBkLRYj8REpeXhKcz7t9bcM9hALDhdODi0",
    authDomain: "fa22-convergent-supply-chain.firebaseapp.com",
    projectId: "fa22-convergent-supply-chain",
    storageBucket: "fa22-convergent-supply-chain.appspot.com",
    messagingSenderId: "770881793832",
    appId: "1:770881793832:web:aac97ef33eaf0c6deeea1d",
    measurementId: "G-PBLVTNS0JN"
  })
  
  const auth = getAuth(firebaseApp);
  const analytics = getAnalytics(app);
  export default getFirestore();