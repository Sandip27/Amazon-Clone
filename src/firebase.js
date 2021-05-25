import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjJXGvlM2CUgz2CWZ4va6F0lhylZ4FDAU",
  authDomain: "clone-80d1c.firebaseapp.com",
  projectId: "clone-80d1c",
  storageBucket: "clone-80d1c.appspot.com",
  messagingSenderId: "452143283733",
  appId: "1:452143283733:web:a169b8bf06254f2d1bd81c",
  measurementId: "G-PZ9BJ3BCRR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
