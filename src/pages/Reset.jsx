import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {resetPassword} from '../services/user'
import cardlogo from '../assets/feature/flashcardlogoalone.png';

const schema = yup.object().shape({
    email: yup
      .string()
      .email('must be a valid email address')
      .required('Email is required')
  });
const Reset = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        resolver: yupResolver(schema),
      });

const onSubmit = async (data) => {
  await resetPassword(data);
  navigate('/login');
};

return (
  <div>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src={cardlogo}
            alt="logo"
          />
          Cardly
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {t("Change Password")}
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("Your email")}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  {...register('email')}
                />
                {errors.email?.message && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className=" font-medium">
                      {t(`${errors.email?.message}`)}
                    </span>
                  </p>
                )}
                {errors.emailError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className=" font-medium">
                      {t(`${errors.emailError?.message}`)}
                    </span>
                  </p>
                )}
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {t("Reset password")}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);
}

export default Reset;
