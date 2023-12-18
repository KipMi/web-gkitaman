"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/pendeta`;

interface repoType {
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  status: string;
}

const TabelPendeta = () => {
  const [allKegiatan, setAllKegiatan] = useState<repoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setAllKegiatan(response.data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  try {
    return (
      <table className="table overflow-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Pendeta</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allKegiatan.map((items: repoType, i: number) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {items.namaDepan} {items.namaTengah} {items.namaKeluarga}
                </td>
                <td className="w-1/2 overflow-clip">{items.status}</td>
                <td className="flex justify-around">
                  <button className="btn btn-info btn-sm">Edit</button>
                  <button className="btn btn-error btn-sm">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } catch (error: any) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        Cannot retrieve table ({error.message})
      </div>
    );
  }
};

export default TabelPendeta;
