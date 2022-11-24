import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from './firebaseConfig';

export async function UploadAudio(audio) {
  return new Promise((resolve,reject)=>{
    const audioRef = ref(storage, `audio/${audio.name}`);
    const uploadTask = uploadBytesResumable(audioRef, audio);

    uploadTask.on(
      'state_changed',
      () => {getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        resolve(downloadURL);
      });},
      (error) => {
        reject(error);
      }
    );
  });
  
}

export async function CreateNewCard(frontCard, backCard) {
  try{
    console.log('hello from create');
    console.log(frontCard)
    const docRef = collection(db, 'Hayat-testCard');
  await addDoc(docRef, {
    frontType: frontCard.type,
    frontData: frontCard.data,
    backType: backCard.type,
    backData: backCard.data,
  });
  }
  catch (error){
    console.log(error);
    throw Error(`Create new card failed with error ${error.message}`);
  }
  
}
