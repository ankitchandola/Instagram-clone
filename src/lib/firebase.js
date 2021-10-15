import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_z9lUPEUk9MjSkzH2cE6a1hvKB0xIUB8",
  authDomain: "instagram-clone-ankit-project.firebaseapp.com",
  projectId: "instagram-clone-ankit-project",
  storageBucket: "instagram-clone-ankit-project.appspot.com",
  messagingSenderId: "259887382653",
  appId: "1:259887382653:web:a14b8684231c66d67f3114",
  measurementId: "G-JS161JQMGD"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
  