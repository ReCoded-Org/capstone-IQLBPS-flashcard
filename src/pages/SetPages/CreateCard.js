import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Alert from '../../components/alert/Alert';
import CardInput from '../../components/SetCard/CardInput';
import { CreateNewCard } from '../../services/CardService';
import uploadFilePromise from '../../services/uploadFile';

function CreateCard() {
  const [alert, setAlert] = useState({ type: '', title: '' });
  const [isError, setIsError] = useState(false);
  const [frontCard, setFrontCard] = useState({ type: '', data: null });
  const [backCard, setBackCard] = useState({ type: '', data: null });

  const handleError = (error) => {
    setIsError(true);
    setTimeout(() => setIsError(false), 2500);
    setAlert(error);
  };

  const handleFrontCardData = (data) => {
    setFrontCard(data);
  };

  const handleBackCardData = (data) => {
    setBackCard(data);
  };

  function validateDataCard() {
    if (frontCard.data === null || backCard.data === null) {
      throw new Error('Please file the two parts of card');
    }
  }
  async function processCardData() {
    if (frontCard.type !== 'text') {
     const link = await uploadFilePromise(frontCard.data, frontCard.type)
        console.log('from set state');
        setFrontCard((prev) => {
         // console.log(result);

          // console.log('linkkkkk', link)
          return { ...prev, data: link };
        });
    
    }
    if (backCard.type !== 'text') {
      setBackCard(async (prev) => {
        return {
          ...prev,
          data: await uploadFilePromise(backCard.data, backCard.type),
        };
      });
    }
  }

  const handleCreateCard = async () => {
    try {
      validateDataCard();
      await processCardData();
      await CreateNewCard(frontCard, backCard);
      handleError({ type: 'success', title: 'New card created successfully' });
    } catch (error) {
      handleError({ type: 'error', title: `${error.message}` });
    }
  };

  function textData() {
    return <div>{ReactHtmlParser(frontCard.data)}</div>;
  }
  return (
    <div>
      {isError && <Alert type={alert.type} title={alert.title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-16 ">
        <CardInput
          key={1}
          handleError={handleError}
          handleData={handleFrontCardData}
        />
        <CardInput
          key={2}
          handleError={handleError}
          handleData={handleBackCardData}
        />
      </div>
      <div className="flex justify-center gap-8">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Review the card
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleCreateCard}
        >
          Create new card
        </button>
        {textData()}
      </div>
    </div>
  );
}

export default CreateCard;
