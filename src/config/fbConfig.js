import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_n5OH6HuZresRxeFAQ9BFe1pLYcW5UiA",
    authDomain: "pet-hotel-6fb5d.firebaseapp.com",
    databaseURL: "https://pet-hotel-6fb5d.firebaseio.com",
    projectId: "pet-hotel-6fb5d",
    storageBucket: "",
    messagingSenderId: "1087553118650",
    appId: "1:1087553118650:web:d43b1055d3c8b4b9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;