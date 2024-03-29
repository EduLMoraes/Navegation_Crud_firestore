// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvMrTEyoQF4BmRHBaphify1Nqi1-d1nM",
  authDomain: "meu-primeiro-fbi.firebaseapp.com",
  projectId: "meu-primeiro-fbi",
  storageBucket: "meu-primeiro-fbi.appspot.com",
  messagingSenderId: "791891243472",
  appId: "1:791891243472:web:1662bb850339c6dd5509d5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };