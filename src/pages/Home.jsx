import React from 'react';
// import FeaturePoints from '../components/feature/FeaturePoints';
// import FeatureCard from '../components/feature/FeatureCard';
// import Hero from '../components/Hero';
// import {
//   LEARNING_FEATURES,
//   WEBSITE_FEATURES,
// } from '../assets/feature/Features';

import SetPage from './Set';

const Home = () => {
  return (
    <SetPage />
    // <div>
    //   <Hero />
    //   <div className="bg-primary dark:bg-gray-900 py-20">
    //     {LEARNING_FEATURES.map((feature) => (
    //       <FeatureCard feature={feature} key={feature.name} />
    //     ))}
    //   </div>
    //   <div className="bg-primary dark:bg-gray-900 py-20">
    //     <FeaturePoints features={WEBSITE_FEATURES} />
    //   </div>
    // </div>
  );
};

export default Home;
