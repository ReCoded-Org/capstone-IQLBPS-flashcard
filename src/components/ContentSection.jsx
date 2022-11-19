/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import SetCarousel from './SetCarousel';
import SetCard from './SetCard';
import { fetchCardsFromSet } from '../services/user';
import Loading from './Loading';


function ContentSection() {

const [cards , setCards] = useState();
const [isLoading , setIsLoading] = useState(true);

const { setId } = useParams();


  useEffect( () => {

const fetchCards  = async () => {

const fetchedCards = await fetchCardsFromSet(setId) ;


setCards(fetchedCards);

setIsLoading(false);
}
fetchCards();
  }, [])
  return (
  <> {
    isLoading ? (
      <Loading />
    ) : (
    <SetCarousel>
      {cards.map((card) => (
        <SetCard key={uuidv4()} front={card.title} back={card.back} />
      ))}
    </SetCarousel> )
  
  
      }
      
      
      </>)
}

export default ContentSection;
