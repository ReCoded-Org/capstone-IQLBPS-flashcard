import React from 'react';

const SetCard = ({ text }) => {
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      {text}
    </div>
  );
};

export default SetCard;
