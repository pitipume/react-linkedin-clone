import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKhjU4b0EDGIKkBWfqRZ5s_kXtaxOVa3k",
  authDomain: "react-linkedin-clone-1ef8c.firebaseapp.com",
  projectId: "react-linkedin-clone-1ef8c",
  storageBucket: "react-linkedin-clone-1ef8c.appspot.com",
  messagingSenderId: "829344812163",
  appId: "1:829344812163:web:6c3bb53059d904758e9fb6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
