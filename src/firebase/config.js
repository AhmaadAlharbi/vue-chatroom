import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmL9zbAQJpNSwmsfpzdJZA5d0LVJBh_bA",
  authDomain: "vue-netnijapro.firebaseapp.com",
  projectId: "vue-netnijapro",
  storageBucket: "vue-netnijapro.appspot.com",
  messagingSenderId: "740340761663",
  appId: "1:740340761663:web:39bd9d1222ce5e7a3f648a",
};

//init
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
