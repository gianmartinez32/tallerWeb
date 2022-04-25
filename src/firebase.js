
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8snPwbwo8Z18mT9hSiZz6k4TC4hyRKe8",
  authDomain: "reactfirebasecrud-8a0dd.firebaseapp.com",
  projectId: "reactfirebasecrud-8a0dd",
  storageBucket: "reactfirebasecrud-8a0dd.appspot.com",
  messagingSenderId: "843682430242",
  appId: "1:843682430242:web:2c2c03c918224c944ef97b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}