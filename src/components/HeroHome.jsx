import React from 'react'
import { Link } from 'react-router-dom';

const HeroHome = () => {
  return (
    <header className="flex flex-col justify-center h-screen  bg-center bg-cover bg-no-repeat 
    bg-[url('https://www.ncl.ac.uk/mediav8/modern-languages/images/translation_header_image-min.jpg')]" >
    <h1 className="ml-24 text-white text-6xl tracking-tight leading-none font-bold">Card<span className='text-primary-500'>ly</span></h1>
    <p className="mt-4 mx-24 text-xl text-white text-opacity-75">Create Flashcards<br/>and study easily from any part of the world.</p>
    <p className="mx-24 mt-8">
    <Link
            to="/login"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </Link>    </p>
  </header>
  )
}

export default HeroHome ;