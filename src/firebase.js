import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA667DzHgrjUu2Klao0gBHndwkRnhnuu_Y",
  authDomain: "clone-by-abdulah.firebaseapp.com",
  databaseURL: "https://clone-by-abdulah.firebaseio.com",
  projectId: "clone-by-abdulah",
  storageBucket: "clone-by-abdulah.appspot.com",
  messagingSenderId: "917870262537",
  appId: "1:917870262537:web:055ea908605bdaab83bbd8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
