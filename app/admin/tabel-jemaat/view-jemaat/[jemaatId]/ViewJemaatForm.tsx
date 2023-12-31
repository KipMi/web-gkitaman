"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type JemaatType = {
  noAnggota: number;
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  noWA: number;
  noTelpRumah: number;
  tempatLahir: string;
  tanggalLahir: Date;
  ayahId: number | undefined | null;
  ibuId: number | undefined | null;
  golonganDarah: string;
  alamatRumah: string;
  wilayah: string;
  pekerjaan: string;
  jabatan: string;
  perusahaan: string;
};

type OrangTuaType = {
  id: number;
  noAnggota: number;
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
};

const ViewJemaatForm = () => {
  const params = useParams<{ jemaatId: string }>();
  console.log(params);

  const [jemaat, setJemaat] = useState<JemaatType>();
  const [ayah, setAyah] = useState<OrangTuaType>();
  const [ibu, setIbu] = useState<OrangTuaType>();
  const [orangTua, setOrangTua] = useState<OrangTuaType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resJemaat = await axios.get(
          `${apiURL}/jemaats/${params.jemaatId}`
        );
        const jemaatData: JemaatType = resJemaat.data;
        setJemaat(jemaatData);

        if (jemaatData.ayahId) {
          const ayahId = jemaatData.ayahId;

          const resAyah = await axios.get(`${apiURL}/orangtua/${ayahId}`);
          const ayahData = resAyah.data;
          setAyah(ayahData);
        }

        if (jemaatData.ibuId) {
          const ibuId = jemaatData.ibuId;

          const resIbu = await axios.get(`${apiURL}/orangtua/${ibuId}`);
          const ibuData = resIbu.data;
          setIbu(ibuData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-around">
      <div className="w-full">
        <h1 className="text-lg font-bold">No. Anggota</h1>
        <p>{jemaat?.noAnggota}</p>
      </div>
      <div className="flex w-full">
        <div className="w-1/3">
          <h1 className="text-lg font-bold">Nama Lengkap</h1>
          <p>
            {jemaat?.namaDepan} {jemaat?.namaTengah} {jemaat?.namaKeluarga}
          </p>
        </div>
        <div className="w-1/3">
          <h1 className="text-lg font-bold">Nomor WA</h1>
          <p>{jemaat?.noWA}</p>
        </div>
        <div className="w-1/3">
          <h1 className="text-lg font-bold">Nomor Telepon Rumah</h1>
          <p>{jemaat?.noTelpRumah}</p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <h1 className="text-lg font-bold">Tempat Lahir</h1>
          <p>{jemaat?.tempatLahir}</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-lg font-bold">Tanggal Lahir</h1>
          <p>
            {jemaat ? new Date(jemaat.tanggalLahir).toLocaleDateString() : ""}
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <h1 className="text-lg font-bold">Alamat</h1>
          <p>{jemaat?.alamatRumah}</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-lg font-bold">Wilayah</h1>
          <p>{jemaat?.wilayah}</p>
        </div>
      </div>
      <div className="w-full border-2 rounded-md p-5 my-2">
        <h1 className="font-bold">Data Orang Tua</h1>
        <div className="flex flex-col my-5">
          <h1 className="text-lg">Data Ayah</h1>
          <div className="flex w-full">
            <div className="w-1/2">
              <h1 className="text-lg font-bold">Nama Ayah</h1>
              <p>
                {ayah
                  ? ayah.namaDepan +
                    " " +
                    (ayah.namaTengah ? ayah.namaTengah : "") +
                    " " +
                    ayah.namaKeluarga
                  : "-"}
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-lg font-bold">No. Anggota Ayah</h1>
              <p>{ayah ? (ayah.noAnggota ? ayah.noAnggota : "-") : "-"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5">
          <h1 className="text-lg">Data Ibu</h1>
          <div className="flex w-full">
            <div className="w-1/2">
              <h1 className="text-lg font-bold">Nama Ibu</h1>
              <p>
                {ibu
                  ? ibu.namaDepan +
                    " " +
                    (ibu.namaTengah ? ibu.namaTengah : "") +
                    " " +
                    ibu.namaKeluarga
                  : "-"}
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-lg font-bold">No. Anggota Ibu</h1>
              <p>{ibu ? (ibu.noAnggota ? ibu.noAnggota : "-") : "-"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-2 rounded-md my-2 p-5">
        <h1>Data Pekerjaan</h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Pekerjaan</h1>
            <p>{jemaat && jemaat.pekerjaan ? jemaat.pekerjaan : "-"}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Jabatan</h1>
            <p>{jemaat && jemaat.jabatan ? jemaat.jabatan : "-"}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Perusahaan</h1>
            <p>{jemaat && jemaat.perusahaan ? jemaat.perusahaan : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJemaatForm;
