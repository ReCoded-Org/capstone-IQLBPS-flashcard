import { v4 as uuidv4 } from 'uuid';

import SetCarousel from './SetCarousel';
import SetCard from './SetCard';

function ContentSection() {
  const data = [
    {
      front: 'FirstSlider',
      back: 'my sound is waf waf !',
    },
    {
      front: 'SecondSlider',
      back: 'I round and red',
    },
    {
      front: 'thirdSlider',
      back: 'Square color brown and use to take lunch ',
    },
  ];

  return (
    <SetCarousel>
      {data.map((item) => (
        <SetCard key={uuidv4()} front={item.title} back={item.back} />
      ))}
    </SetCarousel>
  );
}

export default ContentSection;
