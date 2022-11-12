import { useState } from "react"

import Card from "../components/Card"
import {updateUserName, updateUserProfile} from '../services/user'

export default function Profile() {
  const myPlaceHolderImage =
    'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png';
  const myPlaceHolderUser = 'Sara Khalil';
  const placerHolderData = [
    {
      name: 'Bonnie Green',
      job: 'CEO & Web Developer',
      about:
        'Bonnie drives the technical strategy of the flowbite platform and brand.',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    },
    {
      name: 'Jese Leos',
      job: 'CTO',
      about:
        'Jese drives the technical strategy of the flowbite platform and brand.',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.ng',
    },

    {
      name: 'Michael Gough',
      job: 'Senior Front-end Developer',
      about:
        'Michael drives the technical strategy of the flowbite platform and brand.',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
    },

    {
      name: 'Lana Byrd',
      job: 'Marketing & Sale',
      about:
        'Lana drives the technical strategy of the flowbite platform and brand.',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    },
    {
      name: 'Lana Byrd',
      job: 'Marketing & Sale',
      about:
        'Lana drives the technical strategy of the flowbite platform and brand.',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    },
  ];

  const [popUpState, setPopUpState] = useState('hidden');

  const mainOver = popUpState ? null : 'h-screen overflow-y-hidden';

  function handlePopUp() {
    if (popUpState) {
      setPopUpState(null);
    } else {
      setPopUpState('hidden');
    }
  }

  return (
    <section className={`${mainOver} dark:bg-gray-900`}>
      <PopUp
        popUpState={popUpState}
        handlePopUp={() => handlePopUp()}
        userName={myPlaceHolderUser}
        myImage={myPlaceHolderImage}
      />
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-1 ">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <img
            className="my-4 border-4 border-primary-50 mx-auto mb-4 w-50 h-auto rounded-full"
            src={myPlaceHolderImage}
            alt={`${myPlaceHolderUser}Avatar`}
          />
          <div className="mb-4 mt-2 flex gap-2 justify-center mx-auto max-w-screen-xl text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {myPlaceHolderUser}
            </h3>
          </div>
          <div className="flex justify-center m-5">
            <button
              id="defaultModalButton"
              data-modal-toggle="defaultModal"
              className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
              onClick={handlePopUp}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className=" max-w-screen-xl text-left mx-auto ">
        <h2 className="mb-4 mx-5 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {myPlaceHolderUser} sets
        </h2>
        <hr className="mx-5 max-w-screen-xl" />
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
          {placerHolderData.map((item) => (
            <Card
              coverImage={item.image}
              title={item.name}
              description={item.about}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PopUp({ popUpState, userName, myImage, handlePopUp }) {
  const [updatedName, setUpdatedUserName] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const userID = '3l81U8JCAaaYilKRVLdJWnRG2Z42';

  function handleGrayClick(event) {
    if (event.target.id === 'defaultModal') {
      handlePopUp();
    }
  }

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setUserImage(e.target.files[0]);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (userImage != null) {
      await updateUserProfile(userID, userImage);
    }

    if (updatedName !== null || updatedName.length !== 0)
      await updateUserName(userID, updatedName);

    handlePopUp();
  };

  return (
    <section>
      <div
        id="defaultModal"
        tabIndex="-1"
        onClick={handleGrayClick}
        aria-hidden="true"
        className={`${popUpState} bg-gray-200 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center inset-0 h-modal h-full`}
      >
        <div className="relative p-4 w-full max-w-lg h-full md:h-auto mx-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Change Info
              </h3>
              <button
                type="button"
                onClick={handlePopUp}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action=" ">
              <div className="grid">
                <img
                  className="my-4 border-4 border-primary-50 mx-auto mb-4 h-auto rounded-full col-start-1 col-end-2 row-start-1 row-end-2"
                  src={myImage}
                  alt={`${userName}Avatar`}
                />
                <div className="grid sm:w-2/3 sm:mx-auto gap-2 pl-2">
                  <div className="flex justify-center items-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col justify-center items-center w-auto h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="px-5 flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                      </div>
                      <input
                        onChange={handleImage}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Change Username
                    <input
                      onChange={(e) => setUpdatedUserName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder={userName}
                      required=""
                    />
                  </label>
                </div>
              </div>
              <div className="items-center space-y-4 sm:space-x-36 sm:flex sm:space-y-0">
                <button
                  id="cancel-button"
                  onClick={handlePopUp}
                  type="button"
                  className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-auto hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Cancel Changes
                </button>
                <button
                  onClick={handleSave}
                  id="submit-button"
                  type="submit"
                  className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Confirm Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}