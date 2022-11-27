import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import SetCarousel from './SetCarousel';
import SetCard from './SetCard';
import { fetchCardsFromSet } from '../services/sets';
import Loading from './Loading';


function ContentSection({ setsCards }) {
  const { t } = useTranslation();
  const [cards, setCards] = useState(setsCards);
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
    <div className="lg:max-w-5xl md:w-full mx-auto mt-20">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {t("Set&#39;s cards")}
      </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <SetCarousel>
          {cards.map((card) => (
            <SetCard key={uuidv4()} front={card.title} back={card.back} />
          ))}
        </SetCarousel>
      )}
    </div>
  );
}

export default ContentSection;
