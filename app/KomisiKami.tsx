import React from 'react';

type KomisiKamiType = {
  children: React.ReactNode;
  title: string;
  imgSrc?: string;
};

const KomisiKami: React.FC<KomisiKamiType> = ({ children, title, imgSrc }) => {
  return (
    <div className="card card-side w-full h-60 bg-base-100 shadow-xl my-3">
      <div className="bg-red-400 w-3/4 h-full"></div>
      <div className="card-body overflow-auto">
        <h1 className="card-title">{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default KomisiKami;
