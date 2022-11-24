/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { query, collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import AddSet from './AddSet';
import SelectSet from './SelectSet';

const Sets = () => {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(); //Id can be used when creating the cards
  const [setss, setSets] = useState([]);

  const handleFormVisibility = () => {
    setShowForm(!showForm);
  };
  const onAddingSet = (setObj) => {
    setSets((prevState) => [...prevState, setObj]);
  };

  const fetchSets = async (title) => {
    const setsRef = collection(db, 'sets');
    const q = title ? query(setsRef) : query(setsRef);
    const setsss = await getDocs(q);
    setsss.docs.forEach((set) => {
      setSets((prev) => [...prev, { ...set.data() }]);
    });
  };

  useEffect(() => {
    fetchSets();
  }, [setss]);

  return (
    <div>
      {showForm ? (
        <AddSet
          handleFormVisibility={handleFormVisibility}
          onAddingSet={onAddingSet}
          setId={setId}
        />
      ) : (
        <SelectSet sets={setss} handleFormVisibility={handleFormVisibility} />
      )}
    </div>
  );
};

export default Sets;
