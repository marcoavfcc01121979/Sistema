import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBOenCEow1kND5eYKBQurh8TxjrSdR2Yqw",
    authDomain: "sistema-ef4c8.firebaseapp.com",
    projectId: "sistema-ef4c8",
    storageBucket: "sistema-ef4c8.appspot.com",
    messagingSenderId: "897007610840",
    appId: "1:897007610840:web:25740e6bc078cbe8c120ad",
    measurementId: "G-MVQDQEJWXT"
  };
  
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;