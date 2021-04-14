import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKiFpV9ND_LSKkc57bIYHwj8em_bRpj6s",
  authDomain: "fir-de88a.firebaseapp.com",
  projectId: "fir-de88a",
  storageBucket: "fir-de88a.appspot.com",
  messagingSenderId: "729795428545",
  appId: "1:729795428545:web:4c17a8e268769cd050d440",
  measurementId: "G-PBHJZNM640",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
