import React from "react";
import BaptisCard from "./BaptisCard";

const BaptisPage = () => {
  return (
    <div>
      <BaptisCard category="Baptis Anak" jadwal="29 Mei 16:00">
        Formulir pendaftaran
      </BaptisCard>
      <BaptisCard
        category="Baptis Sidi/Dewasa"
        jadwal="29 Mei 16:00"
        jadwalKatekisasi="30 Mei 16:00"
      >
        Formulir pendaftaran
      </BaptisCard>
    </div>
  );
};

export default BaptisPage;
