import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "alfaservicio-integral.appspot.com",
  messagingSenderId: "602530827906",
  appId: "1:602530827906:web:0745925154ce7dd9bdee9b",
  measurementId: "G-YJ6K2ZL3VG"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth, getDisplayName };


signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
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
