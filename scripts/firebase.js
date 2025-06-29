<!-- firebase.js -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyD5otUlJN-0CKt7VTG4URJsdvTuViSSTm4",
    authDomain: "bheringcode.firebaseapp.com",
    projectId: "bheringcode",
    storageBucket: "bheringcode.appspot.com",
    messagingSenderId: "624075822366",
    appId: "1:624075822366:web:9e748fe9302a38b385e50f",
  };

  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);

  // Referências prontas
  const auth = firebase.auth();          // Para login e autenticação
  const db = firebase.firestore();       // Para banco de dados Firestore
</script>