
import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022
        <a href="https://flowbite.com/" className="hover:underline">
          Cardly™
        </a>
        . {t("All Rights Reserved.")}
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            {t("About")}
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            {t("Privacy Policy")}
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            {t("Licensing")}
          </Link>
        </li>
        <li>
          <Link to="l" className="hover:underline">
            {t("Contact")}
          </Link>
        </li>
        <li className=" ml-10 ">
          <LanguageSelector />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
