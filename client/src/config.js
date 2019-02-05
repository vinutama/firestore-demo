import firebase from 'firebase'


var config = {
  apiKey: "AIzaSyCfduXAr7m3Q_UCIWpSEegzr_QSv_sdmDc",
  authDomain: "firestore-demo-29eb8.firebaseapp.com",
  databaseURL: "https://firestore-demo-29eb8.firebaseio.com",
  projectId: "firestore-demo-29eb8",
  storageBucket: "firestore-demo-29eb8.appspot.com",
  messagingSenderId: "758495690519"
};

const db = firebase.initializeApp(config).firestore();

export default db
