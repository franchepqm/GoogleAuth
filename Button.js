import { ManageAccount } from './firebaseconect.js';

document.getElementById("btn-google").addEventListener("click", () => {
    const account = new ManageAccount();
    account.signInWithGoogle();
});
