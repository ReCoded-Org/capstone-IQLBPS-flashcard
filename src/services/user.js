import { updateDoc, doc } from "firebase/firestore";
  import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
  import {db , storage } from './firebaseConfig';

export const updateUserName = async(userId, userName)=>{
    const user = doc(db, "users", userId)
    await updateDoc(user, { displayName: userName});
  }

  async function uploadImagePromise(image) {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        'state_changed',
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
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