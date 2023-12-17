import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KegiatanCard from './components/KegiatanCard';
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = `${apiURL}/`;

type kegiatanType = {
  imageURL: string;
  judulKegiatan: string;
  deskripsiKegiatan: string;
  komisi: string;
};

const KegiatanTerkini = () => {
  const [kegiatans, setKegiatans] = useState<kegiatanType[]>([]);
  const [hasFetchedData, setFetchedData] = useState(false);

  useEffect(() => {
    const fetchKegiatans = async () => {
      try {
        const response = await axios.get(baseUrl + 'kegiatans/latest');
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

  return (
    <div className="h-auto flex flex-wrap justify-around">
      {kegiatans.map((kegiatan: kegiatanType, i: number) => {
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

export default KegiatanTerkini;
