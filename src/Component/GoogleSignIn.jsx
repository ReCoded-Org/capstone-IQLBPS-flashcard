import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , signInWithPopup }  from 'firebase/auth'


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
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth , provider).then((result)=>{
     const name = result.user.displayName;
     const {email} = result.user.email;
     const profilePic = result.user.photoURL;
     localStorage.getItem("name", name)
     localStorage.getItem("email",email)
     localStorage.getItem("profilePic",profilePic)
     

    }).catch(error => console.log (error))
    
}