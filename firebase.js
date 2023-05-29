import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDyhpmqDskLvYSQzqgTsAvBMkqwABuM7vE",
  authDomain: "clone-c1e20.firebaseapp.com",
  projectId: "clone-c1e20",
  storageBucket: "clone-c1e20.appspot.com",
  messagingSenderId: "797435955804",
  appId: "1:797435955804:web:fb3fafaa092ba745e77499"
  });
  const db = firebaseConfig.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { firebaseConfig as firebase };

export { db , auth , provider };
