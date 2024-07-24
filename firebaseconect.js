import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


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
const auth = getAuth();

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

export { auth, AccountManager };





