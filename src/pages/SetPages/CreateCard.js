import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import CardInput from '../../components/SetCard/CardInput';

function CreateCard() {
    const [alert, setAlert] = useState({type:'',title:''});
    const [isError, setIsError] = useState(false);

    const handleError = (error)=>{
        setIsError(true);
        setTimeout(()=>setIsError(false), 2500);
        setAlert(error);
    }
  return (
    <div>
        {isError && <Alert
          type={alert.type}
          title={alert.title}
        />}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-16 ">
      <CardInput key={1}  handleError={handleError}/>
      <CardInput key={2}  handleError={handleError}/>
      
     </div>
     <div className='flex justify-center gap-8'>
      <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Review the card
      </button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

        Create new card
      </button>
    </div>
    </div>
  );
}

export default CreateCard;
