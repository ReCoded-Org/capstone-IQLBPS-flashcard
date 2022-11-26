import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from './firebaseConfig';

async function uploadFilePromise(image, bucket) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${bucket}/${image.name}`);
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

export default uploadFilePromise;
