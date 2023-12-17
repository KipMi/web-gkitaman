'use client';

import React, { useState } from 'react';

const ReadMoreLess = ({ children }: { children: React.ReactNode }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <div>
      <div className={`overflow-hidden ${readMore ? 'block' : 'hidden'}`}>
        {children}
      </div>
      <a className="btn btn-primary" onClick={toggleBtn}>
        {!readMore ? 'Read more' : 'Read less'}
      </a>
    </div>
  );
};

export default ReadMoreLess;
