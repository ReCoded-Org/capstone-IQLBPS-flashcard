/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function ContentSection() {

   const data = [

      {
       
         id: 1,
         image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg",
         title: 'FirstSlider',
         question:'my sound is waf waf !'
      },
      {
         id: 2,
         image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
         title: 'SecondSlider',
         question:'I round and red'
      },
      {
         id: 3,
         image: "https://5.imimg.com/data5/NN/GS/MY-41367701/wooden-table-500x500.jpg",
         title: 'thirdSlider',
         question:'Square color brown and use to take lunch '
      }
   ];

   const [activeSlide, setActiveSlide] = useState(1);


   const prevSliderHandler = (id) => {
      if (id === 1) {
         setActiveSlide(data.length)
      } else if (id > 1) {
         setActiveSlide(activeSlide - 1)
      } else {
         setActiveSlide(data.length - 1);
      }
   }

   const nextSliderHandler = (id) => {
      if (id === data.length) {
         setActiveSlide(1)
      } else if (id < data.length) {
         setActiveSlide(activeSlide + 1)
      } else {
         setActiveSlide(data.length - 1);
      }
   }

   return (
      <div className='m-6'>
         {data.map((item) => {
            const { id, image, title ,question} = item;
            return (
               <div key={id} className={
                  activeSlide === id
                     ? 'flex justify-between items-center'
                     : 'hidden'}
               >



                  <button type="button" className="w-3 h-3 rounded-full  test-6xl border-2 border-black" aria-current="false" aria-label="Slide 1" onClick={() =>
                     prevSliderHandler(id)}>
                     <FiChevronRight />
                  </button>
                  <div className='flex flex-col items-center'>
                     <p>{question}</p>
                     <img src={image} alt={title} />
                     <h2 className='text-2xl font-bold my-6'>{id}</h2>
                     <h3 className='text-sl'>{title}</h3>
                  </div>
                  <button type="button" className="w-3 h-3 rounded-full  test-6xl border-2 border-black" aria-current="false" aria-label="Slide 1" onClick={() =>
                     nextSliderHandler(id)}>
                     <FiChevronLeft />
                  </button >
               </div>
            );
         })}
      </div>
   )
};







export default ContentSection;