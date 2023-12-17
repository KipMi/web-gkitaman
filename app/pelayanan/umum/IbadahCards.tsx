'use client';

import React, { useEffect, useState } from 'react';
import useIbadahStore from '@/app/store/useIbadahStore';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/ibadah`;

const formatCategoryName = (category: string): string => {
  return category
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (match) => match.toUpperCase());
};

type CardType = {
  category: string;
  temaIbadah: string;
  pemimpin: string;
  infoTambahan: string;
  waktuMulai: Date;
  waktuSelesai: Date;
  linkVideo: string;
};

const IbadahCards = () => {
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
    <div className="w-full h-auto flex flex-col items-center my-5">
      {cards.map((card) => {
        return (
          <div className="card w-3/4 shadow-xl mt-5" key={card.category}>
            <div className="card-body">
              <h1 className="card-title">
                Ibadah {formatCategoryName(card.category)}
              </h1>
              <h1>Tema Ibadah: {card.temaIbadah}</h1>
              <p>Dipimpin oleh: {card.pemimpin}</p>
              <p>Waktu pelaksanaan:</p>
              <p>
                {new Date(card.waktuMulai).toLocaleTimeString()} -{' '}
                {new Date(card.waktuSelesai).toLocaleTimeString()}
              </p>
              <div className="px-5 border-2 py-2 rounded-lg">
                <h1>Informasi:</h1>
                {card.infoTambahan}
              </div>
            </div>
            <div className="card-actions justify-end m-5">
              <a
                href={card.linkVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Link Video Ibadah
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IbadahCards;
