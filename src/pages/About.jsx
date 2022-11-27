import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import aboutimage from '../assets/feature/about.png';

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("Let&apos;s make our own flashcards.")}
            </h2>
            <p className="mb-6 fontLight text-gray-500 md:textLg dark:text-gray-400">
              {t("about text")}
            </p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white roundedLg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              {t("Get started")}
            </Link>
          </div>
          
          <div className="w-full  dark:block">
            <img src={aboutimage} alt="dasgboard" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("Why you Should Use")} Cardly?
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
             {t("we believe that anyone can learn anything. All it takes is a determined spirit, the right guidance and the right tools to see it through.")}
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="65"
                  width="65"
                >
                  <rect width="256" height="256" fill="none" />
                  <rect
                    x="28"
                    y="84"
                    width="160"
                    height="128"
                    rx="8"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="15"
                  />
                  <path
                    d="M64,44H220a8,8,0,0,1,8,8V176"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="15"
                    id="mainIconPathAttribute"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {t("Convert your notes")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("You can easily convert your notes into sets of flashcards for a very effective self-testing approach.")}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <line
                    x1="128"
                    y1="176"
                    x2="128"
                    y2="80"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M88,144a40,40,0,1,1-40,40v-6.7"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M168,144a40,40,0,1,0,40,40v-6.7"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M88,84v8a28,28,0,0,1-28,28"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M168,84v8a28,28,0,0,0,28,28"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {t("Enhance your memory")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("flashcards promote active learning and active recall.")}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="IconChangeColor"
                  height="100"
                  width="100"
                >
                  <path
                    d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"
                    id="mainIconPathAttribute"
                    fill="#486189"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {t("Leave comments")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("Give feedback and discuss particular parts of your sets with others.")}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  width="93"
                  height="93"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="IconChangeColor"
                >
                  <path
                    d="M4.62323 5.24841C2.99408 7.02743 2 9.39765 2 12C2 17.5229 6.47715 22 12 22C14.5361 22 16.8517 21.0559 18.6146 19.5"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                  <path
                    d="M21.3021 15.6775C21.7525 14.5392 22 13.2985 22 12C22 6.47715 17.5228 2 12 2C10.7687 2 9.58934 2.22255 8.5 2.62961"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                  <path
                    d="M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391C13.1141 16.431 14.1901 16.0554 14.6973 15.1933"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                  <path
                    d="M12 16.391V18.5"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                  <path
                    d="M9.5 9.5C9.5 10.6811 10.3525 11.1647 11.3862 11.5"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                  <path
                    d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872V5.5"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                  <path
                    d="M3 3L21 21"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    id="mainIconPathAttribute"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {t("Save your money")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("Cardly is completely free. All you have to do is sign up and start.")}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-translate"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  <path
                    d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
                    id="mainIconPathAttribute"
                    // fill="#ffffff"
                    fill="#486189"
                  />
                  <path
                    d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
                    id="mainIconPathAttribute"
                    // fill="#ffffff"
                    fill="#486189"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {t("Choose your language")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
               {t( "Switch between two languages: Arabic or English.")}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99"
                  height="99"
                  viewBox="0 0 512 512"
                  id="IconChangeColor"
                >
                  <title>ionicons-v5-j</title>
                  <path
                    d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                    fill="none"
                    stroke="#486189"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    id="mainIconPathAttribute"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {t("Dark Mode")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("You can easily switch between light and dark modes.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
