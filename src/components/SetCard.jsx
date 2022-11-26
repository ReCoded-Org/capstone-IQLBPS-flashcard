import React, { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const SetCard = ({ front, back }) => {
  const ref = useRef();
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <Flippy
        flipOnHover={false}
        flipOnClick
        flipDirection="vertical"
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide style={{ backgroundColor: 'white', curser: 'pointer' }}>
          {front} <br />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            onClick={() => {
              ref.current.toggle();
            }}
          />
        </FrontSide>
        <BackSide style={{ backgroundColor: 'white', curser: 'pointer' }}>
          {back}
        </BackSide>
      </Flippy>
    </div>
    //
  );
};

export default SetCard;
