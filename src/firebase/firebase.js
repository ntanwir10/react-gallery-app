import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAt03uoOMNq60ERIdpfFJ65Ke6-9uqPv6Y",
  authDomain: "react-fakegram.firebaseapp.com",
  databaseURL: "https://react-fakegram.firebaseio.com",
  projectId: "react-fakegram",
  storageBucket: "react-fakegram.appspot.com",
  messagingSenderId: "347708669442",
  appId: "1:347708669442:web:1b31535301fbf64334311b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
