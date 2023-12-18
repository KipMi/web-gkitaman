"use client";

import React, { useEffect, useState } from "react";
import KaryawanCard from "./components/KaryawanCard";
import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/pendeta`;

type PendetaType = {
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  imageURL: string;
  status: string;
};

const CarouselGallery = () => {
  const [pendeta, setPendeta] = useState<PendetaType[]>([]);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    const fetchPendeta = async () => {
      const response = await axios.get(url);
      setPendeta(response.data);
      setHasFetchedData(true);
    };

    if (!hasFetchedData) {
      fetchPendeta();
    }
  }, [hasFetchedData]);

  return (
    <div className="carousel carousel-center max-w-lg p-4 space-x-4 rounded-box">
      {pendeta.map((pendeta: PendetaType, i: number) => {
        return (
          <div className="carousel-item" key={i}>
            {pendeta.status == "AKTIF" ? (
              <KaryawanCard
                name={
                  pendeta.namaDepan +
                  " " +
                  (pendeta.namaTengah ? pendeta.namaTengah : "") +
                  " " +
                  pendeta.namaKeluarga
                }
                imgUrl={apiUrl + "/uploads/images/" + pendeta.imageURL}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CarouselGallery;
