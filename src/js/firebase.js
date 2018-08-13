// Initialize
// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDmI0IERvjSq0334ndUnRMb09SyKuE4mMI',
  authDomain: 'taller-firebase-4e2b1.firebaseapp.com',
  databaseURL: 'https://taller-firebase-4e2b1.firebaseio.com',
  projectId: 'taller-firebase-4e2b1',
  storageBucket: 'taller-firebase-4e2b1.appspot.com',
  messagingSenderId: '521580200060'
};
firebase.initializeApp(config);

let database = firebase.database();
let db = firebase.firestore();


window.signInUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(event => {
      // Se utiliza la interfaz Location, implementando la propiedad Location.href que contiene la URL
      location.href = '../views/dashboard.html';
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });
};

window.signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(event => {
      location.href = '../views/login.html';
      alert('Saliendo...');
    }).catch(error => {
      alert('Error al cerrar sesión', error);
    });
};
