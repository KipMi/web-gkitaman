"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type PMHType = {
  tema: string;
  pendeta: string;
};

const PMHCard = () => {
  const [data, setData] = useState<PMHType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/pemahaman/1`);
        console.log(response.data);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="card w-3/4 shadow-xl mt-5">
        <div className="card-body">
          <h1 className="card-title">Pemahaman Alkitab Rabu</h1>
          <p>Tema: {data ? data.tema : ""}</p>
          <p>Firman: {data ? data.pendeta : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default PMHCard;
