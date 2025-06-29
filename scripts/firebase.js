import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5otUlJN-0CKt7VTG4URJsdvTuViSSTm4",
  authDomain: "bheringcode.firebaseapp.com",
  projectId: "bheringcode",
  storageBucket: "bheringcode.appspot.com",
  messagingSenderId: "624075822366",
  appId: "1:624075822366:web:9e748fe9302a38b385e50f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);