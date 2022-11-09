import React from 'react';

const Card = ({ coverImage, title, description }) => {
  return (
    <article
      className="group h-96 mx-auto w-full max-w-sm transform cursor-pointer rounded-lg bg-cover overflow-hidden bg-no-repeat bg-center shadow-xl duration-500 hover:-translate-y-2"
      style={{ backgroundImage: `url("${coverImage}")` }}
    >
      <div className="flex w-full h-full transform flex-col flex-wrap bg-black bg-opacity-10 px-5 pt-48 duration-300 hover:bg-opacity-75 hover:backdrop-blur-sm">
        <h2 className="mb-6 drop-shadow-xl translate-y-20 transform text-xl font-bold text-white duration-300 group-hover:translate-y-0 group-hover:text-white ">
          {title}
        </h2>
        <div className="mb-5 h-2 w-14 translate-y-20 transform rounded-full bg-primary-700 duration-300 group-hover:translate-y-0" />
        <p className="transform text-base text-white opacity-0 duration-500 group-hover:opacity-80">
          {description}
        </p>
      </div>
    </article>
  );
};
export default Card;
