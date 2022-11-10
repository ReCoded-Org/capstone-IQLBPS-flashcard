import { useTranslation } from 'react-i18next';
import React from 'react';
import i18n from '../i18n';

const LanguageSelector = () => {
  const { t } = useTranslation();
  const languageHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={languageHandler}
    >
      <option value="en">{t('English')}</option>
      <option value="ar">{t('Arabic')}</option>
    </select>
  );
};

export default LanguageSelector;
