import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Función para iniciar sesión con Google
function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuario autenticado con Google:', user);
      window.location.href = "usuario.html";
    })
    .catch((error) => {
      console.error("Error al iniciar sesión con Google: ", error.message);
      alert("Error al iniciar sesión con Google: " + error.message);
    });
}

// Asignar evento al botón de Google
document.getElementById("btn-google").addEventListener("click", signInWithGoogle);

console.log('Autenticación con Google habilitada.');
