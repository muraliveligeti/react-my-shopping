import firebase from 'firebase/app';

import 'firebase/firestore';


import 'firebase/auth';


const config = {
    apiKey: "AIzaSyANAmTFsyv6AR3yV29ti0GfXdWvIp1yf3Y",
    authDomain: "my-shopping-db.firebaseapp.com",
    databaseURL: "https://my-shopping-db.firebaseio.com",
    projectId: "my-shopping-db",
    storageBucket: "my-shopping-db.appspot.com",
    messagingSenderId: "643477134884",
    appId: "1:643477134884:web:ab80b193d17f46869742b1",
    measurementId: "G-C5537ZGYZ1"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();