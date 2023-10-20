import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCBgbdObvfLSerKHkht61G7TG_VMrqkkOs",
  authDomain: "miniblog-92016.firebaseapp.com",
  projectId: "miniblog-92016",
  storageBucket: "miniblog-92016.appspot.com",
  messagingSenderId: "514973383355",
  appId: "1:514973383355:web:5a67fde8e984967167879e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };