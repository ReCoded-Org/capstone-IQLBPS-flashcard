import React from 'react';

import FeaturePoints from '../components/feature/FeaturePoints';
import FeatureCard from '../components/feature/FeatureCard';
import {
  LEARNING_FEATURES,
  WEBSITE_FEATURES,
} from '../assets/feature/Features';

import Hero from "../components/Hero"


const Home = () => {
  return (
    <div>
    <Hero/>
      {LEARNING_FEATURES.map((feature) => (
        <FeatureCard feature={feature} key={feature.name} />
      ))}
      <FeaturePoints features={WEBSITE_FEATURES} />
    </div>
  );
};

export default Home;