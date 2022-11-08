import React, { useState, useEffect } from 'react'
import {
    collection,
    query,
    onSnapshot,
    // updateDoc,
    // doc
  } from "firebase/firestore";
  import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
  import {db , storage } from '../services/firebaseConfig';
  

const UpdateProfile = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState({name:""})
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const usersCollection = collection(db, "users");
  
    useEffect(() => {
        const q = query(usersCollection);
        const unsub = onSnapshot(q, (querySnapshot) => {
          const usersArray = [];
          querySnapshot.forEach((user) => {
            usersArray.push({ ...user.data(), id: user.id });
          });
           
          setUsers(usersArray);
        });
        return () => unsub();
      }, []);

      
  const handleChange = e => {
    if (e.target.files[0]) {
      console.log("handleChange",e.target.files[0])
      setImage(e.target.files[0]);
    }
  };

  const handleChangeName = e => {
    if (e.target.value) {
      console.log("handleChangeName",e.target.value)
      setName(e.target.value);
    }
  }



  const handleUpload = () => {
    const storageRef  = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const percent  = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(percent );
      },
      error => {
        console.log(error);
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then(urlLink => {
            setUrl(urlLink);
          });
      }
      () => {
        await updateDoc(doc(db, "users", users.id), { photoURL: url});
      };
    );
  };

  console.log("image: ", image);

  return (
    <div>
    <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <button type='button' onClick={handleUpload}>Upload</button>
      <input type="text" onChange={handleChangeName} />
      <br />
      {url}
      <br />
      <img src={url || "http://via.placeholder.com/300"} alt="firebase"/>
    </div>
  )
}
export default UpdateProfile;