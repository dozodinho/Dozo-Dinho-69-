// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEe61VFz06yv",
  authDomain: "dozo-dinho-academy.firebaseapp.com",
  projectId: "dozo-dinho-academy",
  storageBucket: "dozo-dinho-academy.appspot.com",
  messagingSenderId: "643133325",
  appId: "1:643133325047:web:8",
  measurementId: "G-SNVZF7PHE9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up Function
function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User created:", userCredential.user.email);
      // Send verification email
      userCredential.user.sendEmailVerification();
      alert("Account created! Check your email to verify.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Error: " + error.message);
    });
}

// Login Function
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user.email);
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Error: " + error.message);
    });
}

// Logout Function
function logout() {
  auth.signOut()
    .then(() => {
      console.log("User logged out");
      alert("Logged out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Check if user is logged in
function checkAuth() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      document.getElementById("userEmail").textContent = user.email;
      console.log("User is logged in:", user.email);
    } else {
      // User is not logged in - redirect to login
      console.log("User is not logged in");
      if (window.location.pathname.includes("dashboard")) {
        alert("Please log in first!");
        window.location.href = "login.html";
      }
    }
  });
}

// Load Firebase SDK
if (!window.firebase) {
  const script = document.createElement("script");
  script.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  script.onload = () => {
    const authScript = document.createElement("script");
    authScript.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
    document.head.appendChild(authScript);
  };
  document.head.appendChild(script);
}
