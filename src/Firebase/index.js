// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCPAgLUWjZWJdBTnAf9G92dcLKX3ON23g",
  authDomain: "coderhouse-react-d8840.firebaseapp.com",
  projectId: "coderhouse-react-d8840",
  storageBucket: "coderhouse-react-d8840.appspot.com",
  messagingSenderId: "386492097966",
  appId: "1:386492097966:web:ca7f0671b3e02a328d943f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app)

export default db