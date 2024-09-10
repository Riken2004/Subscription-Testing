import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6xR6Ph_HRVHldJQyKo2Do9r2KkKASgC8",
    authDomain: "deakin-web-app-4a262.firebaseapp.com",
    projectId: "deakin-web-app-4a262",
    storageBucket: "deakin-web-app-4a262.appspot.com",
    messagingSenderId: "704465897743",
    appId: "1:704465897743:web:956e3f23de2d17224e967a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters ({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocFromAuth= async (userAuth) =>{
    const userDocRef = doc (db, 'USER', userAuth.uid );
   

    const userSnapshot = await getDoc(userDocRef);


    if (! userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
        })
    }
    catch (error){
    console.log('error in creating', error.message)
    }
}

    return userDocRef;
  }
