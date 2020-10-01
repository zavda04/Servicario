import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBdVDlunLG1iGEmAAxqDnXImQQ5ucOWXpI",
    authDomain: "servicario-c1482.firebaseapp.com",
    databaseURL: "https://servicario-c1482.firebaseio.com",
    projectId: "servicario-c1482",
    storageBucket: "servicario-c1482.appspot.com",
    messagingSenderId: "247144022404",
    appId: "1:247144022404:web:a45889655dca7924381dd1",
    measurementId: "G-4XFB3XSVPK"
  };

const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;

const { TimeStamp } = firebase.firestore;
export { TimeStamp }
