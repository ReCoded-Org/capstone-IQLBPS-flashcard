import React from 'react';

import SetCarousel from '../components/SetCarousel';
import SetCard from '../components/SetCard';

export default function Review() {
  const sets = ['First Text', 'Second Text', 'Third Text'];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h1 className=" text-center mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Review Page
        </h1>
        <SetCarousel>
          {sets.map((set) => (
            <SetCard key={set} text={set} />
          ))}
        </SetCarousel>
      </div>
    </section>
  );
}
