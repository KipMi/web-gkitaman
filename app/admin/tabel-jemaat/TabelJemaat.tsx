"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import useFetchData from "@/app/hooks/useFetchData";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/jemaats`;

interface jemaatType {
  id: number;
  noAnggota: number;
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  noWA: number;
  noTelpRumah: number;
  tempatLahir: string;
  tanggalLahir: Date;
  golonganDarah: string;
  alamatRumah: string;
  wilayah: string;
}

const TabelJemaat = () => {
  // const { data: allJemaat, loading, error } = useFetchData<jemaatType>(url);

  const [allJemaat, setAllJemaat] = useState<jemaatType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setAllJemaat(response.data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();

  const onDelete = async (id: number) => {
    try {
      const delUrl = url.concat("/", id.toString());
      console.log(delUrl);
      await axios
        .delete(delUrl)
        .then((res) => console.log(res.status))
        .catch((err) => console.log(err.message));

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       setAllJemaat(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>No. Anggota</th>
          <th>Nama Lengkap</th>
          <th>No. HP/WA</th>
          <th>No. Telp Rumah</th>
          <th>Tempat Lahir</th>
          <th>Tanggal Lahir</th>
          <th>Golongan Darah</th>
          <th>Alamat Rumah</th>
          <th>Wilayah</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allJemaat.map((jemaat: jemaatType, i: number) => {
          // console.log(jemaat);
          return (
            <tr className="hover" key={i}>
              <td>{jemaat.noAnggota}</td>
              <td>
                {jemaat.namaDepan} {jemaat.namaTengah} {jemaat.namaKeluarga}
              </td>
              <td>{jemaat.noWA}</td>
              <td>{jemaat.noTelpRumah}</td>
              <td>{jemaat.tempatLahir}</td>
              <td>
                {new Date(jemaat.tanggalLahir).toLocaleDateString("en-GB")}
              </td>
              <td>{jemaat.golonganDarah}</td>
              <td>{jemaat.alamatRumah}</td>
              <td>{jemaat.wilayah}</td>
              <td className="flex justify-around">
                <Link
                  href={`./tabel-jemaat/view-jemaat/${jemaat.id}`}
                  className="btn btn-neutral btn-sm"
                >
                  View
                </Link>
                <Link
                  href={`./tabel-jemaat/edit-jemaat/${jemaat.id}`}
                  className="btn btn-info btn-sm"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-error btn-sm"
                  // onClick={(e) => onDelete(jemaat.id)}
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
};

export default TabelJemaat;
