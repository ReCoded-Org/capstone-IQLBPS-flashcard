import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import SetCarousel from './SetCarousel';
import SetCard from './SetCard';
import { fetchCardsFromSet } from '../services/sets';
import Loading from './Loading';

function ContentSection() {
  const [cards, setCards] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = await fetchCardsFromSet(id);

      setCards(fetchedCards);

      setIsLoading(false);
    };
    fetchCards();
  }, []);
  return (
    <>
      {' '}
      {isLoading ? (
        <Loading />
      ) : (
        <SetCarousel>
          {cards.map((card) => (
            <SetCard key={uuidv4()} front={card.title} back={card.back} />
          ))}
        </SetCarousel>
      )}
    </>
  );
}

export default ContentSection;
