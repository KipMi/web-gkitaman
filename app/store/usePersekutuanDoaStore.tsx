'use client';

import { create } from 'zustand';

type DoaType = {
  tema: string;
  pemimpin: string;
  waktuMulai: string;
  waktuSelesai: string;
};

type DoaStore = {
  cards: Record<string, DoaType>;
  updateCard: (category: string, newData: DoaType) => void;
};

const getDefaultCards = (): Record<string, DoaType> => {
  // Provide default values for each category
  return {
    pagi: {
      tema: 'Default Pagi Theme',
      pemimpin: 'Default Pagi Theme',
      waktuMulai: '10.00',
      waktuSelesai: '12.00',
    },
    malam: {
      tema: 'Default Malam Theme',
      pemimpin: 'Default Malam Theme',
      waktuMulai: '17.00',
      waktuSelesai: '19.00',
    },
  };
};

const usePersekutuanDoaStore = create<DoaStore>((set) => {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && window.localStorage;

  const storedData = isLocalStorageAvailable
    ? localStorage.getItem('persekutuanDoaCards')
    : null;
  const initialCards = storedData ? JSON.parse(storedData) : getDefaultCards();

  return {
    cards: initialCards,
    updateCard: (category, newData) => {
      set((state) => {
        const updatedCards = { ...state.cards, [category]: newData };
        isLocalStorageAvailable &&
          localStorage.setItem(
            'persekutuanDoaCards',
            JSON.stringify(updatedCards)
          );
        return { cards: updatedCards };
      });
    },
  };
});

export default usePersekutuanDoaStore;
