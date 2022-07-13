import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBZgPpd9YQp9NgUnM6ZWcop0EJvSkqNVvE",
    authDomain: "pro-67-16ea1.firebaseapp.com",
    projectId: "pro-67-16ea1",
    storageBucket: "pro-67-16ea1.appspot.com",
    messagingSenderId: "653150841469",
    appId: "1:653150841469:web:6932a092c5c68302459f14"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();