import React from 'react';
import Link from 'next/link';

const KegiatanTabs = () => {
  return (
    <div className="tabs flex justify-center">
      <Link className="tab tab-bordered" href="/kegiatan/anak">
        Kegiatan Anak
      </Link>
      <Link className="tab tab-bordered" href="/kegiatan/remaja">
        Kegiatan Remaja
      </Link>
      <Link className="tab tab-bordered" href="/kegiatan/pemuda">
        Kegiatan Pemuda
      </Link>
      <Link className="tab tab-bordered" href="/kegiatan/dewasa">
        Kegiatan Dewasa
      </Link>
      <Link className="tab tab-bordered" href="/kegiatan/lansia">
        Kegiatan Lansia
      </Link>
      <Link className="tab tab-bordered" href="/kegiatan/kesenian">
        Kesenian
      </Link>
      <Link className="tab tab-bordered" href="/kegiatan/multimedia">
        Multimedia
      </Link>
    </div>
  );
};

export default KegiatanTabs;
