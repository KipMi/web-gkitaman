"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/renungan`;

type RenunganType = {
  title: string;
  kitab: string;
  ayat: string;
  content: string;
};

const RenunganComponent = () => {
  const [renungan, setRenungan] = useState<RenunganType>();
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    const fetchRenungan = async () => {
      const response = await axios.get(url + "/1");
      setRenungan(response.data);
      setHasFetchedData(true);
    };

    if (!hasFetchedData) {
      fetchRenungan();
    }
  }, [hasFetchedData]);

  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl w-full flex justify-center">
          {renungan?.title}
        </h1>
      </div>
      <div className="w-full flex justify-center">{renungan?.kitab}</div>
      <div className="w-full flex justify-center">{renungan?.ayat}</div>
      <div className="w-full flex justify-center my-3">
        <p className=" text-justify">{renungan?.content}</p>
      </div>
    </div>
  );
};

export default RenunganComponent;
