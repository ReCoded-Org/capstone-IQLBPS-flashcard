import React from 'react';
import FeaturePoints from '../components/feature/FeaturePoints';
import UserFeedback from '../components/feature/UserFeedback';

import Hero from '../components/Hero';
import {
  LEARNING_FEATURES,
  WEBSITE_FEATURES,
} from '../assets/feature/Features';
import HeroHome from '../components/HeroHome';
import FeatureCardRight from '../components/feature/FeatureCardRight';
import FeatureCardLeft from '../components/feature/FeatureCardLeft';
import FeatureShowcase from '../components/feature/FeatureShowcase';

const Home = () => {
  return (
    <div>
      <HeroHome/>
      <Hero />
      <FeatureShowcase/>
      <div className="bg-primary dark:bg-gray-900">
      <FeatureCardRight feature={LEARNING_FEATURES[0]} key={LEARNING_FEATURES[0].name} />
       
          <FeatureCardLeft feature={LEARNING_FEATURES[1]} key={LEARNING_FEATURES[1].name} />

      </div>
      <div className="bg-primary dark:bg-gray-900 py-20">
        <FeaturePoints features={WEBSITE_FEATURES} />
      </div>

      <div className="bg-primary dark:bg-gray-900">

<UserFeedback/>
  </div>  
    </div>
  );
};

export default Home;
