import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function CreateNewCard(setId, frontCard, backCard) {
  try {
    const setRef = doc(db, 'sets', setId);
    await updateDoc(setRef, {
      cards: arrayUnion({
        frontType: frontCard.type,
        frontData: frontCard.data,
        backType: backCard.type,
        backData: backCard.data,
      }),
    });
  } catch (error) {
    throw Error(`Create new card failed with error ${error.message}`);
  }
}
