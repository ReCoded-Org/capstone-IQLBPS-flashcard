import { updateDoc, doc } from "firebase/firestore";
  import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
  import {db , storage } from './firebaseConfig';

export const updateUserName = async(userId, userName)=>{
    const user = doc(db, "users", userId)
    await updateDoc(user, { displayName: userName});
  }

  async function uploadImagePromise(image){
    return new Promise((resolve, reject) => {
    const storageRef  = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on("state_changed",
    snapshot => {
        console.log(snapshot)
    },
      (error) => {
        console.log('inside function error',error);
        reject()
      },
      () => {
        //   getDownloadURL(uploadTask.snapshot.ref)
        uploadTask.snapshot.ref.getDownloadURL()
          .then((urlLink) => {
            console.log('inside function urlLink',urlLink);

            resolve(urlLink)
          });
      }
    ); 
    })
  }

  export const updateUserProfile = async(userId, image) => {
    console.log('first user.js')
    console.log(image)
    const url = await uploadImagePromise(image)
    console.log('url in user.js',url)
    const user = doc(db, "users", userId)
    await updateDoc(user, { photoURL: url});
    return url;
  };



//   function handleUpload(e) {
//     e.preventDefault();
//     const path = `/images/${file.name}`;
//     const ref = storage.ref(`/images/${file.name}`);
//     await ref.put(file);
//     const url = await ref.getDownloadURL();
//     setURL(url);
//     setFile(null);
//   }

