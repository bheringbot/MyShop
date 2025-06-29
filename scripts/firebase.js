// scripts/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyD5otUlJN-0CKt7VTG4URJsdvTuViSSTm4",
  authDomain: "bheringcode.firebaseapp.com",
  projectId: "bheringcode",
  storageBucket: "bheringcode.appspot.com",
  messagingSenderId: "624075822366",
  appId: "1:624075822366:web:9e748fe9302a38b385e50f",
};

// inicializa o app
firebase.initializeApp(firebaseConfig);
console.log("Firestore OK?", db ? "Sim" : "Não");

// exporta
const auth = firebase.auth();
const db   = firebase.firestore();
