'use client';

import KegiatanCard from '@/app/components/KegiatanCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = `${apiURL}/`;

type kegiatanType = {
  imageURL: string;
  judulKegiatan: string;
  deskripsiKegiatan: string;
  komisi: string;
};

const KegiatanAnakPage = () => {
  const [kegiatans, setKegiatans] = useState<kegiatanType[]>([]);
  const [hasFetchedData, setFetchedData] = useState(false);

  useEffect(() => {
    const fetchKegiatans = async () => {
      try {
        const response = await axios.get(baseUrl + 'kegiatans');
        setKegiatans(response.data);
        setFetchedData(true);
      } catch (error) {
        console.error('Error fetching kegiatans', error);
      }
    };

    if (!hasFetchedData) {
      fetchKegiatans();
    }
  }, [hasFetchedData]);

  const kesenian = kegiatans.filter(
    (item) => item.komisi === 'Komisi Kesenian'
  );

  return (
    <div className="h-auto min-h-screen m-10 flex flex-wrap justify-between">
      {kesenian.map((kegiatan: kegiatanType, i: number) => {
        return (
          <KegiatanCard
            judulKegiatan={kegiatan.judulKegiatan}
            imageURL={baseUrl + 'uploads/images/' + kegiatan.imageURL}
            key={i}
          >
            {kegiatan.deskripsiKegiatan}
          </KegiatanCard>
        );
      })}
    </div>
  );
};

export default KegiatanAnakPage;
