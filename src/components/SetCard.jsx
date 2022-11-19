import React from 'react';

const SetCard = ({ front, back }) => {
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      {front} {back}
    </div>
  );
};

export default SetCard;
