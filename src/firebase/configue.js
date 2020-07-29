import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDEqH64C2TYj2Uk7P3IZ6cxsWvb4Arx3dM",
    authDomain: "userapp-e4ce0.firebaseapp.com",
    databaseURL: "https://userapp-e4ce0.firebaseio.com",
    projectId: "userapp-e4ce0",
    storageBucket: "userapp-e4ce0.appspot.com",
    messagingSenderId: "195195894489",
    appId: "1:195195894489:web:e85cf20c7795c80f795cc8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;