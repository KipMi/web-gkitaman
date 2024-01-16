"use client";

import React, { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import KegiatanComponent from "./KegiatanComponent";
import queryClient from "../providers/queryClient";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type KegiatanData = {
  id: number;
  judulKegiatan: string;
  imageURL: string;
  deskripsiKegiatan?: string;
};

const KegiatanPage = () => {
  const [data, setData] = useState<KegiatanData[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/kegiatans`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (hasMoreData) {
      setStartIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - itemsPerPage;
    setStartIndex((prevIndex) => Math.max(newIndex, 0));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  const hasMoreData = data.length > startIndex + itemsPerPage;

  const latestData = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="p-5">
      <KegiatanComponent data={latestData} />
      <div className="flex justify-around my-5 px-10">
        <button className="btn btn-primary" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default KegiatanPage;
