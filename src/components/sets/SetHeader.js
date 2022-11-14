import { addDoc, collection } from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { db, storage } from '../../services/firebaseConfig';

async function uploadImage(image){
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `newSetImages/${image.name}`);
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

export const SetHeader = async(setName, setImage, setDescription , setCategories) => {
    const url = await uploadImage(setImage)
    const setsCollecion = collection(db, 'sets');
    const docRef = await addDoc(setsCollecion,{
        name: setName,
        image: url,
        description: setDescription,
        categories: setCategories
    })    
    console.log("Document written with ID: ", docRef.id);
    return docRef.id
} 







