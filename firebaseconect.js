import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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
const firestore = getFirestore(app);

console.log("Conexión a Firebase establecida correctamente.");

class AccountManager {
    signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Usuario autenticado con Google:', user);
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("Error al iniciar sesión con Google: ", error.message);
                alert("Error al iniciar sesión con Google: " + error.message);
            });
    }
}

export { auth, firestore, Analytics, AccountManager };





