
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {

    apiKey: "AIzaSyDAZJpDeVgNo51e_IUL3vv7PnnJzstqiBo",
  
    authDomain: "exhibit-cf3a6.firebaseapp.com",
  
    databaseURL: "https://exhibit-cf3a6-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "exhibit-cf3a6",
  
    storageBucket: "exhibit-cf3a6.firebasestorage.app",
  
    messagingSenderId: "683235244734",
  
    appId: "1:683235244734:web:fbdda13506501f70543cef",
  
    measurementId: "G-4NNX3XYC1P"
  
  };
    

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

const messageBox = document.getElementById("message");

// Sign up function
signupBtn.addEventListener("click", async () => {
    const email = signupEmail.value;
    const password = signupPassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await sendEmailVerification(user);
        messageBox.innerText = "Verification email sent! Check your inbox.";
    } catch (error) {
        console.error("Error during signup:", error);
        messageBox.innerText = "Error: " + error.message;
    }
});

// Login function
loginBtn.addEventListener("click", () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if (!userCredential.user.emailVerified) {
                messageBox.innerText = "Please verify your email before logging in.";
            } else {
                messageBox.innerText = "Login successful!";
                // Redirect or perform action on success
            }
        })
        .catch((error) => {
            messageBox.innerText = "Error: " + error.message;
        });
});
