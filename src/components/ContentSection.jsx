import { v4 as uuidv4 } from 'uuid';

import SetCarousel from './SetCarousel';
import SetCard from './SetCard';

function ContentSection({ cards }) {
  return (
    <div className="lg:max-w-5xl md:w-full mx-auto mt-20">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Set&#39;s cards
      </h2>
      <SetCarousel>
        {cards.map((item) => (
          <SetCard key={uuidv4()} front={item.title} back={item.back} />
        ))}
      </SetCarousel>
    </div>
  );
}

export default ContentSection;
