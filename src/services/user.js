import { updateDoc, doc, setDoc } from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { signInWithPopup, signOut } from 'firebase/auth';
  
import {
  db,
  storage,
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
} from './firebaseConfig';

const result = {
  user: {
    email: '',
    uid: '',
    displayName: '',
    photoURL: '',
  },
  error: '',
};

export const logOut = async () => {
  let err = '';
  try {
    await signOut(auth);
  } catch (error) {
    // An error happened.
    err = error;
  }

  return err;
};
// add signup to firebase
const signUpToFirebase = async (userData) => {
  try {
    const userCollection = doc(db, 'users', userData.uid);
    await setDoc(userCollection, {
      ...userData,
    });
  } catch (e) {
    // console.error('Error adding document: ', e);
  }
};

export const signInWithGoogle = async () => {
  try {
    const googleUserAuth = await signInWithPopup(auth, provider);

    await updateProfile(googleUserAuth.user, {
      displayName: googleUserAuth.user.displayName,
      photoURL: googleUserAuth.user.photoURL,
    });
    const userData = {
      email: googleUserAuth.user.email,
      uid: googleUserAuth.user.uid,
      displayName: googleUserAuth.user.displayName,
      photoURL: googleUserAuth.user.photoURL,
    };
    result.user = { ...userData };

    await signUpToFirebase(userData);
  } catch (er) {
    result.error = er;
  }
};

// Create a new user with Firebase
export const registerUser = async (user) => {
  try {
    const userAuth = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    await updateProfile(userAuth.user, {
      displayName: user.username,
      photoURL: '',
    });

    const userData = {
      email: user.email,
      uid: userAuth.user.uid,
      displayName: user.username,
      photoURL: '',
    };
    result.user = { ...userData };

    await signUpToFirebase(userData);
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const updateUserName = async (userId, userName) => {
  const user = doc(db, 'users', userId);
  await updateDoc(user, { displayName: userName });
};

async function uploadImagePromise(image) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export const updateUserProfile = async (userId, image) => {
  const url = await uploadImagePromise(image);
  const user = doc(db, 'users', userId);
  await updateDoc(user, { photoURL: url });
  return url;
};
