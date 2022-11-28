import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddSet from '../components/sets/AddSet';
import SelectSet from '../components/sets/SelectSet';
import CreateCard from '../components/CreateCard';
import { fetchUserSets } from '../services/user';

const CreateSet = () => {
  const { user } = useSelector((state) => state.user);
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(null);
  const [sets, setSets] = useState([]);

  const handleFormVisibility = () => {
    setShowForm(!showForm);
  };
  const onAddingSet = (setObj) => {
    setSets((prevState) => [...prevState, setObj]);
  };

  useEffect(() => {
    const fetchSets = async () => {
      const result = await fetchUserSets(user.uid);
      setSets(result);
    };
    fetchSets();
  }, [user]);

  return (
    <div className="dark:bg-gray-900">
      {showForm ? (
        <AddSet
          handleFormVisibility={handleFormVisibility}
          onAddingSet={onAddingSet}
          setId={setId}
        />
      ) : (
        <SelectSet
          sets={sets}
          handleFormVisibility={handleFormVisibility}
          setId={setId}
        />
      )}
      <CreateCard id={id} />
    </div>
  );
};

export default CreateSet;
