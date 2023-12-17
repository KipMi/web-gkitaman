'use client';

import React, { MouseEventHandler, useRef, RefObject } from 'react';

type ScrollButtonProps = {
  label: string;
  scrollRef: RefObject<HTMLDivElement>;
};

const ScrollButton = (props: ScrollButtonProps) => {
  const refObject = props.scrollRef;
  const handleClick = () => {
    refObject.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button onClick={handleClick} className="z-10 btn btn-neutral">
      {props.label}
    </button>
  );
};

export default ScrollButton;
