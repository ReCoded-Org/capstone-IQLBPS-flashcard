/* eslint-disable react/destructuring-assignment */
import { t } from 'i18next';
import React from 'react';
import ComboBox from './ComboBox';

const SelectSet = ({handleFormVisibility ,sets, setId }) => {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <button
        className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn-primary w-100 mb-3 float-right"
        type="button"
        onClick={() => handleFormVisibility()}
      >
        {t('ADD NEW SET')}
      </button>
      <label htmlFor="sets" className="text-xl font-bold ml-2">
        {t('Choose From Current Sets')}
        <ComboBox data={sets} register={() => {}} errors={{}} setId={setId}/>
      </label>
    </div>
  );
};

export default SelectSet;
