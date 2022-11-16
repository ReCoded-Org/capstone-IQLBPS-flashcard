/* eslint-disable no-unused-vars */
import {
  updateDoc,
  doc,
  setDoc,
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  getDoc,
  where,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { signInWithPopup, signOut } from 'firebase/auth';

import {
  db,
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
} from './firebaseConfig';
import uploadImagePromise from './uploadImage';

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

export const updateUserProfile = async (userId, image) => {
  const url = await uploadImagePromise(image, 'images');
  const user = doc(db, 'users', userId);
  await updateDoc(user, { photoURL: url });
  return url;
};

export async function fetchUserInfo(userId) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
}

export const latestAddedSets = async () => {
  const setsRef = collection(db, 'sets');

  const q = query(setsRef, orderBy('createdAt', 'desc'), limit(3));

  const sets = await getDocs(q);
  return sets.docs.map((set) => set.data());
};

export async function fetchUserSets(id) {
  const setsRef = collection(db, 'sets');

  const q = query(setsRef, where('set.id', '==', id));

  const sets = await getDocs(q);

  return sets.docs.map((set) => set.data());
}

export async function fetchSetsById(arrayOfSets) {
  const sets = await Promise.all(
    arrayOfSets.map(async (id) => {
      const docRef = doc(db, 'sets', id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    })
  );
  return sets;
}

export const favoritedSets = async (userId) => {
  const userRef = doc(db, 'users', userId);

  const userData = await getDoc(userRef);

  const { favSets } = userData.data();

  const favSetsData = await fetchSetsById(favSets);

  return favSetsData;
};
