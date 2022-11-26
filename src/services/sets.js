import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

import uploadFilePromise from './uploadFile';
import { db } from './firebaseConfig';

export const SetHeader = async (
  setName,
  setImage,
  setDescription,
  setCategories,
  user
) => {
  const url = await uploadFilePromise(setImage, 'set');
  const setsCollecion = collection(db, 'sets');
  const docRef = await addDoc(setsCollecion, {
    name: setName,
    image: url,
    description: setDescription,
    categories: setCategories,
    user: { name: user.displayName, id: user.uid, photoURL: user.photoURL },
  });
  return docRef.id;
};

export async function fetchSetData(id) {
  let data = '';
  const docRef = doc(db, 'sets', id);
  const docSnap = await getDoc(docRef);
  data = docSnap.data();
  return data;
}

export async function fetchCardsFromSet(setId) {
  const setsRef = doc(db, 'sets', setId);
  const cards = await getDoc(setsRef);
  return cards.data().cards;
}
