import { addDoc, collection } from 'firebase/firestore';

import uploadImagePromise from './uploadImage';
import { db } from './firebaseConfig';

export const SetHeader = async (
  setName,
  setImage,
  setDescription,
  setCategories
) => {
  const url = await uploadImagePromise(setImage, 'set');
  const setsCollecion = collection(db, 'sets');
  const docRef = await addDoc(setsCollecion, {
    name: setName,
    image: url,
    description: setDescription,
    categories: setCategories,
  });
  return docRef.id;
};
