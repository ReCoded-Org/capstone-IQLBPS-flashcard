import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { logInWithEmailAndPassword } from '../services/user';
import { login } from '../features/user/userSlice';
import GoogleSignInButton from '../components/GoogleSignInButton';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [formError, setFormError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (user) => {
    const result = await logInWithEmailAndPassword(user);

    if (result.error.code) {
      setFormError(true);
    } else {
      setFormError(false);
      try {
        dispatch(
          login({
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.username,
            photoUrl: result.user.photoURL,
          })
        );
        navigate('/');
      } catch {
        // console.log('user not updated');
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flashcards
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {t('Sign in to your account')}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register('email')}
                  />
                  {errors.email && (
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
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className=" font-medium">
                        {t(`${errors.password?.message}`)}
                      </span>
                    </p>
                  )}
                  {errors.passwordError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className=" font-medium">
                        {t(`${errors.passwordError?.message}`)}
                      </span>
                    </p>
                  )}
                </label>
                {formError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className=" font-medium">
                      {t(`Password or email is wrong`)}
                    </span>
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <GoogleSignInButton />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {t('Dont have an account yet?')}{' '}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {t('Forgot password?')}
                <Link
                  to="/reset"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Reset Password
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
