import React, { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const SetCard = ({ front, back }) => {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false}
      flipOnClick
      flipDirection="horizontal"
      ref={ref}
      className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" /// these are optional style, it is not necessary
    >
      <FrontSide>
        {front} <br />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          onClick={() => {
            ref.current.toggle();
          }}
        />
      </FrontSide>
      <BackSide>{back}</BackSide>
    </Flippy>
  );
};

export default SetCard;
