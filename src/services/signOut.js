import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  //TODO: set user to null
  navigate("/")
}).catch((error) => {
  // An error happened.
  console.log(error)
});

