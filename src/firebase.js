// firebase 연결하기!
import firebase from "firebase";

// 1. initialize
const firebaseApp = firebase.initializeApp({
  apiKey: "FIX_ME",
  authDomain: "todo-react-5462f.firebaseapp.com",
  databaseURL: "https://todo-react-5462f.firebaseio.com",
  projectId: "todo-react-5462f",
  storageBucket: "todo-react-5462f.appspot.com",
  messagingSenderId: "16820027693",
  appId: "1:16820027693:web:c69edba69e12de33b993a4",
  measurementId: "G-S6N6TSM7C4",
});

const db = firebaseApp.firestore();

export default db;
