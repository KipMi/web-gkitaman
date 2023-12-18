import React from 'react';
import FormKegiatan from './FormKegiatan';
import TabelKegiatan from './TabelKegiatan';

const PengelolaanKegiatanPage = () => {
  return (
    <div className="m-10 min-h-screen p-5">
      <h1 className="text-2xl">Pengelolaan Kegiatan</h1>
      <FormKegiatan />
      <h1 className="text-xl">Tabel Kegiatan</h1>
      <TabelKegiatan />
    </div>
  );
};

export default PengelolaanKegiatanPage;
