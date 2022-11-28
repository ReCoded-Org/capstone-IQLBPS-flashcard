import React from 'react';

const FeatureShowcase = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            See our flashcards in action
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <iframe
            width="976"
            height="550"
            src="https://www.youtube.com/embed/E-wY2mJVlu0"
            title="Memorize anything with Cardly Flashcards"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
