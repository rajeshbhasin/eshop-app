import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcZVp9gWN5oDJx9YSYUIAZmZMLRYt-viY",
  authDomain: "clone-6fd39.firebaseapp.com",
  projectId: "clone-6fd39",
  storageBucket: "clone-6fd39.appspot.com",
  messagingSenderId: "809306153643",
  appId: "1:809306153643:web:d88313950a0062cee9cdee",
  measurementId: "G-SSMGMCCD55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
