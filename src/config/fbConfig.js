import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBjbniR6kew0BIgboJ-1jeNHbW4SCxn1ho",
  authDomain: "ulam-9603e.firebaseapp.com",
  databaseURL: "https://ulam-9603e.firebaseio.com",
  projectId: "ulam-9603e",
  storageBucket: "",
  messagingSenderId: "999223704938",
  appId: "1:999223704938:web:5b4d1097bafd93c4"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;