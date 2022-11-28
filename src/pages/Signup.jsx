import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../services/user';
import { login } from '../features/user/userSlice';

const schema = yup.object().shape({
  username: yup.string().required('username is required'),
  email: yup
    .string()
    .email('must be a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'password is less than 6 characters')
    .required('password is required'),
  conPassword: yup
    .string()
    .required('password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const result = await registerUser(data);

    if (result.error !== '') {
      setError('emailError', { message: 'email already exists' });
    } else {
      clearErrors('emailError');
      try {
        // Dispatch the user information for persistence in the redux state
        dispatch(
          login({
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.username,
            photoUrl: result.user.photoURL,
          })
        );
        navigate('/profile');
      } catch {
        // console.log('user not updated');
      }
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {t("Create An Account")}
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("Enter Your UserName")}
                    <input
                      type="username"
                      name="username"
                      id="username"
                      className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={t("username")}
                      required=""
                      {...register('username')}
                    />
                    {errors.username && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className=" font-medium">
                          {t(`${errors.username?.message}`)}
                        </span>
                      </p>
                    )}
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("Enter Your Email")}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("Enter Your Password")}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      {...register('password')}
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className=" font-medium">
                          {t(`${errors.password?.message}`)}
                        </span>
                      </p>
                    )}
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="conPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("Confirm Your password")}
                    <input
                      type="password"
                      name="conPassword"
                      id="conPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 mt-1 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      {...register('conPassword')}
                    />
                    {errors.conPassword && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className=" font-medium">
                          {t(`${errors.conPassword?.message}`)}
                        </span>
                      </p>
                    )}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {t("Create An Account")}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {t("Already have an account?")}
                  <Link
                    to="/login"
                    className="font-medium mx-2 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {t("Login here")}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
