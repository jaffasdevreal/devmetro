
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {

    apiKey: "AIzaSyD_aZZoXbLq0P3rlbhu39Txn2khxCHozcM",
  
    authDomain: "fairmetro-fd718.firebaseapp.com",
  
    projectId: "fairmetro-fd718",
  
    storageBucket: "fairmetro-fd718.firebasestorage.app",
  
    messagingSenderId: "994770412304",
  
    appId: "1:994770412304:web:2e344113ca4151e34fbb95",
  
    measurementId: "G-EFPG0D9D6T"
  
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
