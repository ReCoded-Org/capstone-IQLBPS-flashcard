/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { signInWithPopup, signOut } from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
} from 'firebase/firestore';

import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
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

    const docRef = await setDoc(userCollection, {
      ...userData,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
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

    console.log(googleUserAuth.user);
    await signUpToFirebase(userData);
  } catch (er) {
    // eslint-disable-next-line no-console
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

    console.log(userAuth);
    await signUpToFirebase(userData);
  } catch (error) {
    result.error = error;
  }

  console.log(result);
  return result;
};