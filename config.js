import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyADZaDyKybtWknqKzr0RjaEwHs0WNiVc1w",
  authDomain: "pro-60-school-attendence-bbef0.firebaseapp.com",
  databaseURL: "https://pro-60-school-attendence-bbef0-default-rtdb.firebaseio.com",
  projectId: "pro-60-school-attendence-bbef0",
  storageBucket: "pro-60-school-attendence-bbef0.appspot.com",
  messagingSenderId: "183365463893",
  appId: "1:183365463893:web:d7a7d8a63f10fb3c0309dc",
  measurementId: "G-7X5FB86YCE"
};
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  