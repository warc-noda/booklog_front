import firebase from "firebase/app"

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyAywMIoyglcLCppOemea6-PdQBtWYnT-HY",
  authDomain: "booklog-674d1.firebaseapp.com",
  databaseURL: "https://booklog-674d1.firebaseio.com",
  projectId: "booklog-674d1",
  storageBucket: "booklog-674d1.appspot.com",
  messagingSenderId: "431936737418",
  appId: "1:431936737418:web:b78f123b3c271e2a499d73",
  measurementId: "G-Y58LD7E61Z"
})
}

export default firebase