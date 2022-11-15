import { useState } from 'react';
import AddSet from './AddSet';
import SelectSet from './SelectSet';

const Sets = () => {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(); //Id can be used when creating the cards
  const [setss, setSets] = useState([
    {
      id: 1,
      name: 'A',
      image: 'image',
      description: 'description',
      category: 'category',
    },
    {
      id: 2,
      name: 'B',
      image: 'image2',
      description: 'description2',
      category: 'category2',
    },
  ]);

  const handleFormVisibility = () => {
    setShowForm(!showForm);
  };
  const onAddingSet = (setObj) => {
    setSets((prevState) => [...prevState, setObj]);
  };
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
};;

export default Sets;
