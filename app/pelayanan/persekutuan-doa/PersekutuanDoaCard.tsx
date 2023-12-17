'use client';

import usePersekutuanDoaStore from '@/app/store/usePersekutuanDoaStore';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/doa`;

const formatCategoryName = (category: string): string => {
  return category
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (match) => match.toUpperCase());
};

type CardType = {
  category: string;
  tema: string;
  pemimpin: string;
  infoTambahan: string;
  waktuMulai: Date;
  waktuSelesai: Date;
};

const PersekutuanDoaCard = () => {
  // const { cards } = usePersekutuanDoaStore();
  const [cards, setCards] = useState<CardType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCards(response.data);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col items-center">
      {cards.map((card) => {
        return (
          <div className="card w-3/4 shadow-xl mt-5" key={card.category}>
            <div className="card-body">
              <h1 className="card-title">
                Doa {formatCategoryName(card.category)}
              </h1>
              <p>Dipimpin oleh: {card.pemimpin}</p>
              <p>Tema: {card.tema}</p>
              <p>Waktu Pelaksanaan</p>
              <p>
                {new Date(card.waktuMulai).toLocaleTimeString()} -{' '}
                {new Date(card.waktuSelesai).toLocaleTimeString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersekutuanDoaCard;
