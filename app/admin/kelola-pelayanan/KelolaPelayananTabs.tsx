import React from 'react';
import Link from 'next/link';

const KelolaPelayananTabs = () => {
  return (
    <div className="tabs flex justify-center">
      <Link href={'./umum'} className="tab tab-bordered hover:tab-active">
        Pelayanan Ibadah
      </Link>
      <Link
        href={'./persekutuan-doa'}
        className="tab tab-bordered hover:tab-active"
      >
        Persekutuan Doa
      </Link>
      <Link
        href={'./renungan-harian'}
        className="tab tab-bordered hover:tab-active"
      >
        Renungan Harian
      </Link>
    </div>
  );
};

export default KelolaPelayananTabs;
