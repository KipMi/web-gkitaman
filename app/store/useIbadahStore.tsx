// 'use client';

// import { create } from 'zustand';

// type IbadahType = {
//   temaIbadah: string;
//   pemimpin: string;
//   waktuMulai: string;
//   waktuSelesai: string;
//   linkIbadah: string;
// };

// type IbadahStore = {
//   cards: Record<string, IbadahType>;
//   updateCard: (category: string, newData: IbadahType) => void;
// };

// const useIbadahStore = create<IbadahStore>((set) => ({
//   cards: JSON.parse(localStorage.getItem('ibadahCards')) || {},
//   updateCard: (category, newData) => {
//     set((state) => {
//       const updatedCards = { ...state.cards, [category]: newData };
//       localStorage.setItem('ibadahCards', JSON.stringify(updatedCards));
//       return { cards: updatedCards };
//     });
//   },
// }));

// export default useIbadahStore;

'use client';

import { create } from 'zustand';

type IbadahType = {
  temaIbadah: string;
  pemimpin: string;
  waktuMulai: string;
  waktuSelesai: string;
  linkIbadah: string;
};

type IbadahStore = {
  cards: Record<string, IbadahType>;
  updateCard: (category: string, newData: IbadahType) => void;
};

const getDefaultCards = (): Record<string, IbadahType> => {
  // Provide default values for each category
  return {
    umum: {
      temaIbadah: 'Default Umum Theme',
      pemimpin: 'Default Umum Leader',
      waktuMulai: '08:00',
      waktuSelesai: '09:00',
      linkIbadah: 'https://example.com/umum',
    },
    remaja: {
      temaIbadah: 'Default Remaja Theme',
      pemimpin: 'Default Remaja Leader',
      waktuMulai: '10:00',
      waktuSelesai: '11:00',
      linkIbadah: 'https://example.com/remaja',
    },
    pemuda: {
      temaIbadah: 'Default Pemuda Theme',
      pemimpin: 'Default Pemuda Leader',
      waktuMulai: '14:00',
      waktuSelesai: '15:00',
      linkIbadah: 'https://example.com/pemuda',
    },
    sekolahMinggu: {
      temaIbadah: 'Default Sekolah Minggu Theme',
      pemimpin: 'Default Sekolah Minggu Leader',
      waktuMulai: '16:00',
      waktuSelesai: '17:00',
      linkIbadah: 'https://example.com/sekolahminggu',
    },
  };
};

const useIbadahStore = create<IbadahStore>((set) => {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && window.localStorage;

  const storedData = isLocalStorageAvailable
    ? localStorage.getItem('ibadahCards')
    : null;
  const initialCards = storedData ? JSON.parse(storedData) : getDefaultCards();

  return {
    cards: initialCards,
    updateCard: (category, newData) => {
      set((state) => {
        const updatedCards = { ...state.cards, [category]: newData };
        isLocalStorageAvailable &&
          localStorage.setItem('ibadahCards', JSON.stringify(updatedCards));
        return { cards: updatedCards };
      });
    },
  };
});

export default useIbadahStore;
