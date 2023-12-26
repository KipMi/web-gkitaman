"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/kegiatans`;

interface repoType {
  id: number;
  judulKegiatan: string;
  deskripsiKegiatan: string;
  komisi: string;
}

const TabelKegiatan = () => {
  const [allKegiatan, setAllKegiatan] = useState<repoType[]>([]);

  const onDelete = async (id: number) => {
    const response = await axios.delete(`${url}/${id}`);
  };

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
            <th>Nama Kegiatan</th>
            <th>Deskripsi</th>
            <th>Komisi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allKegiatan.map((items: repoType, i: number) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{items.judulKegiatan}</td>
                <td className="w-1/2 overflow-clip">
                  {items.deskripsiKegiatan}
                </td>
                <td>{items.komisi}</td>
                <td className="flex justify-around">
                  <Link
                    className="btn btn-info btn-sm"
                    href={`/admin/kelola-kegiatan/${items.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={(e) => onDelete(items.id)}
                  >
                    Delete
                  </button>
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

export default TabelKegiatan;
