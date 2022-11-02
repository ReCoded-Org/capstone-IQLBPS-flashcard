import React from 'react';

const Card = ({ coverImage, title, description }) => {
  return (
    <article
      className="group mx-auto w-full max-w-sm transform cursor-pointer overflow-hidden rounded-lg bg-contain bg-no-repeat bg-center shadow-xl duration-500 hover:-translate-y-2 sm:w-1/2 lg:w-1/3"
      style={{ backgroundImage: `url("${coverImage}")` }}
    >
      <div className="flex w-full transform flex-col flex-wrap bg-black bg-opacity-0 px-10 pt-96 duration-300 hover:bg-opacity-75">
        <h1 className="mb-6 translate-y-20 transform text-3xl text-blck duration-300 group-hover:translate-y-0 group-hover:text-white ">
          {title}
        </h1>
        <div className="mb-5 h-2 w-14 translate-y-20 transform rounded-full bg-green-400 duration-300 group-hover:translate-y-0" />
        <p className="transform text-xl text-white opacity-0 duration-500 group-hover:opacity-80">
          {description}
        </p>
      </div>
    </article>
  );
};
export default Card;
