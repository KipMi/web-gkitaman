import React from 'react';
import KaryawanCard from '../components/KaryawanCard';

const Pendeta = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <h1>Pendeta Kami</h1>
      <div className="w-3/4 h-full flex justify-around items-center">
        <KaryawanCard name="Test" imgUrl="/client/app/assets/img/church2.jpg" />
        <KaryawanCard name="Test" imgUrl="/client/app/assets/img/church2.jpg" />
        <KaryawanCard name="Test" imgUrl="/client/app/assets/img/church2.jpg" />
      </div>
    </div>
  );
};

export default Pendeta;
