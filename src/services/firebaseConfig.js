import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBAxkZUk5tAdxaVYRKqENDBPFb9VEjt28",
  authDomain: "flashcard-7e2e2.firebaseapp.com",
  projectId: "flashcard-7e2e2",
  storageBucket: "flashcard-7e2e2.appspot.com",
  messagingSenderId: "960036831566",
  appId: "1:960036831566:web:55bf0e5f54a55d8e2fde1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);