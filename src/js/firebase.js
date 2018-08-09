// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmI0IERvjSq0334ndUnRMb09SyKuE4mMI",
    authDomain: "taller-firebase-4e2b1.firebaseapp.com",
    databaseURL: "https://taller-firebase-4e2b1.firebaseio.com",
    projectId: "taller-firebase-4e2b1",
    storageBucket: "taller-firebase-4e2b1.appspot.com",
    messagingSenderId: "521580200060"
  };
  firebase.initializeApp(config);
let database = firebase.database();
var db = firebase.firestore();

