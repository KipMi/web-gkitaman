"use client";

import React, { useEffect, useState } from "react";
import FormEditKegiatan from "./FormEditKegiatan";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type KegiatanType = {
  komisi: string;
  judulKegiatan: string;
  deskripsiKegiatan: string;
  imageURL: string;
};

const EditKegiatanPage = ({ params }: { params: { kegiatanId: number } }) => {
  const [kegiatan, setKegiatan] = useState<KegiatanType>();
  const id = params.kegiatanId;
  const kegiatanUrl = `${apiURL}/kegiatans/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(kegiatanUrl);
      const kegiatanData: KegiatanType = response.data;

      setKegiatan(kegiatanData);
    };

    fetchData();
  }, [kegiatanUrl]);

  return (
    <div>
      {kegiatan ? (
        <FormEditKegiatan kegiatan={kegiatan} id={id} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditKegiatanPage;
