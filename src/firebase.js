import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCw_FEp_424eAwsti8OdADxpgYGdo8pNoQ",
    authDomain: "authapp-e875f.firebaseapp.com",
    databaseURL: "https://authapp-e875f.firebaseio.com",
    projectId: "authapp-e875f",
    storageBucket: "authapp-e875f.appspot.com",
    messagingSenderId: "1006643375195",
    appId: "1:1006643375195:web:0adbb22f2c867b38c9a37e",
    measurementId: "G-WYJW1WNWYZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;
