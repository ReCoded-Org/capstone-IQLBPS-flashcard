import React from 'react';
import FeaturePoints from '../components/feature/FeaturePoints';
import FeatureCard from '../components/feature/FeatureCard';
import UserFeedback from '../components/feature/UserFeedback';

import Hero from '../components/Hero';
import {
  LEARNING_FEATURES,
  WEBSITE_FEATURES,
} from '../assets/feature/Features';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-primary dark:bg-gray-900 py-20">
        {LEARNING_FEATURES.map((feature) => (
          <FeatureCard feature={feature} key={feature.name} />
        ))}
      </div>
      <div className="bg-primary dark:bg-gray-900 py-20">
        <FeaturePoints features={WEBSITE_FEATURES} />
      </div>


<UserFeedback/>
    
    </div>
  );
};

export default Home;
