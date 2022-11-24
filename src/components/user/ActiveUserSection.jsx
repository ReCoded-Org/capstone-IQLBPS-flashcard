import React from 'react';

import Card from '../Card';

export const ActiveUserSection = ({ list, title }) => {
  return (
    <div className="mb-8 rounded-md">
      <p className="text-lg text-black font-bold my-6">
        {'>  '} {title}
      </p>
      <div className="h-96 md:h-full sm:h-full text-black flex flex-row flex-wrap  items-start justify-start gap-8">
        {list.map((set) => (
          <Card
            id={set.id}
            coverImage={set?.image}
            description={set?.description}
            title={set.name}
            key={set?.name}
          />
        ))}
      </div>
    </div>
  );
};
