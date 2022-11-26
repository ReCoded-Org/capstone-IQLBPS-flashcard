/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useLinkClickHandler, Link, useNavigate } from 'react-router-dom';
import {
  Navbar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Avatar,
} from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';

import cardlogo from '../assets/feature/flashcardlogoalone.png';
import { logOut } from '../services/user';
import { logout } from '../features/user/userSlice';

const Nav = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    const error = logOut();

    if (error === '') {
      await logOut();

      dispatch(logout);
      navigate('/');
    }
  };

  return (
    <Navbar fluid>
      <Link to="/" className="flex items-center">
        <img
          src={cardlogo}
          style={{ width: '50px', height: '50px' }}
          alt="Flowbite Logo"
        />
      </Link>
      {!user && (
        <div className="flex space-x-4 md:order-2">
          <Link to="login">
            <Button>{t("Log in")}</Button>
          </Link>
          <DarkThemeToggle />
        </div>
      )}

      {user && (
        <div className="flex  space-x-4 md:order-2">
          <DarkThemeToggle />

          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={
                  user.photoUrl
                    ? user.photoUrl
                    : 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                }
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm"> {user.displayName} </span>
              <span className="block truncate text-sm font-medium">
                {user.email}{' '}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>{t("Settings")}</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>{t("Sign out")}</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <span onClick={useLinkClickHandler('/')}>
          <Navbar.Link href="/">{t("Home")}</Navbar.Link>
        </span>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <>
              <span className="text-gray-700 dark:text-gray-400 ">
                {t("Categories")}
              </span>
              <svg
                className="ml-1 w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
        >
          <Dropdown.Item>Math</Dropdown.Item>
          <Dropdown.Item>Science</Dropdown.Item>
          <Dropdown.Item>Entertiment</Dropdown.Item>
          <Dropdown.Item>History</Dropdown.Item>
          <Dropdown.Item>Geography</Dropdown.Item>
        </Dropdown>

        <span onClick={useLinkClickHandler('about')}>
          <Navbar.Link href="about">{t("About")}</Navbar.Link>
        </span>
        <span onClick={useLinkClickHandler('contact')}>
          <Navbar.Link href="contact">{t("Contact")}</Navbar.Link>
        </span>

        <span onClick={useLinkClickHandler('team')}>
          <Navbar.Link href="team">{t("Team")}</Navbar.Link>
        </span>
      </Navbar.Collapse>

      <Navbar.Collapse>
        <div className="flex md:order-2">
          <div className=" relative md:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={t("Search...")}
              onKeyDown={(e) =>
                e.key === 'Enter' && navigate(`/search/${e.target.value}`)
              }
            />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
