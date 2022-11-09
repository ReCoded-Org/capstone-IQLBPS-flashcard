import React, { useState } from 'react'
import {
    // collection,
    // query,
    // onSnapshot,
    updateDoc,
    doc
  } from "firebase/firestore";
  import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
  import {db , storage } from '../services/firebaseConfig';
  

const UpdateProfile = () => {
  const [name, setName] = useState({name:""})
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  
    // useEffect(() => {
    //     const q = query(usersCollection);
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //       const usersArray = [];
    //       querySnapshot.forEach((user) => {
    //         usersArray.push({ ...user.data(), id: user.id });
    //       });
           
    //       setUsers(usersArray);
    //     });
    //     return () => unsub();
    //   }, []);

      
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

  const handleUpload = async() => {
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
          .then(async(urlLink) => {
            setUrl(urlLink);
            const user = doc(db, "users", "8LkT430VVHgZ3K84XPWRfRjYShJ3")
            console.log("url test", urlLink)
            await updateDoc(user, { photoURL: urlLink});
          });
      }
    ); 
  };

  const handleUploadName = async()=>{
    const user = doc(db, "users", "8LkT430VVHgZ3K84XPWRfRjYShJ3")
    await updateDoc(user, { displayName: name});
  }

    
  
  console.log("image: ", image);

  return (
    <div>
    <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <button type='button' onClick={handleUpload}>Upload</button>
      <input type="text" style={{margin: "0px 5px" , border:"1px solid black" }} onChange={handleChangeName} />
      <button type='button' onClick={handleUploadName}>Save</button>
      <br />
      {url}
      <br />
      <img src={url || "http://via.placeholder.com/300"} alt="firebase"/>
    </div>
  )
}
export default UpdateProfile;