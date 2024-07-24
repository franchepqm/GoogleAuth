// firebaseconect.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);
const auth = getAuth();

console.log("Conexión a Firebase establecida correctamente.");

class ManageAccount {
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
}

export { auth, firestore, Analytics, ManageAccount }; 
