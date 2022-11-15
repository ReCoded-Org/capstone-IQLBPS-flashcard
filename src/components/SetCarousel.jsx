import { Carousel } from 'flowbite-react';

const SetCarousel = ({ children }) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicators={false} slide={false}>
        {children}
      </Carousel>
    </div>
  );
};

export default SetCarousel;
