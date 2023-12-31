"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import EditJemaatForm from "./EditJemaatForm";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type EditFormValues = {
  noAnggota: string;
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  noWA: string;
  noTelpRumah: string;
  tempatLahir: string;
  golonganDarah: string;
  tanggalLahir: Date;
  alamatRumah: string;
  wilayah: string;
  namaDepanAyah: string;
  namaTengahAyah: string;
  namaKeluargaAyah: string;
  noAnggotaAyah: string;
  namaDepanIbu: string;
  namaTengahIbu: string;
  namaKeluargaIbu: string;
  noAnggotaIbu: string;
  pekerjaan: string;
  jabatan: string;
  perusahaan: string;
};

type orangTuaType = {
  id: number;
  noAnggota: number;
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
};

type jemaatType = {
  id: number;
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

const EditJemaatPage = ({ params }: { params: { jemaatId: number } }) => {
  const [jemaat, setJemaat] = useState<jemaatType>();
  const [ayah, setAyah] = useState<orangTuaType | undefined>();
  const [ibu, setIbu] = useState<orangTuaType | undefined>();

  const id = params.jemaatId;
  const jemaatUrl = `${apiURL}/jemaats/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jemaatResponse = await axios.get(jemaatUrl);
        const jemaatData: jemaatType = jemaatResponse.data;

        let ayahData: orangTuaType | undefined = undefined;
        let ibuData: orangTuaType | undefined = undefined;

        if (jemaatData.ayahId) {
          const ayahResponse = await axios.get(
            `${apiURL}/orangTua/${jemaatData.ayahId}`
          );
          ayahData = ayahResponse.data;
        }

        if (jemaatData.ibuId) {
          const ibuResponse = await axios.get(
            `${apiURL}/orangTua/${jemaatData.ibuId}`
          );
          ibuData = ibuResponse.data;
        }

        setJemaat(jemaatData);
        setAyah(ayahData);
        setIbu(ibuData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [jemaatUrl]);

  const handleSubmit = async (data: EditFormValues) => {
    const jemaat: jemaatType = {
      id: parseInt(id.toString()),
      noAnggota: parseInt(data.noAnggota),
      namaDepan: data.namaDepan,
      namaTengah: data.namaTengah,
      namaKeluarga: data.namaKeluarga,
      noWA: parseInt(data.noWA),
      noTelpRumah: parseInt(data.noTelpRumah),
      tempatLahir: data.tempatLahir,
      tanggalLahir: new Date(data.tanggalLahir),
      ayahId: ayah?.id !== undefined ? ayah?.id : null,
      ibuId: ibu?.id !== undefined ? ibu?.id : null,
      golonganDarah: data.golonganDarah,
      alamatRumah: data.alamatRumah,
      wilayah: data.wilayah,
      pekerjaan: data.pekerjaan,
      jabatan: data.jabatan,
      perusahaan: data.perusahaan,
    };

    console.log(jemaat);
    try {
      const updateJemaatResponse = await axios.patch(jemaatUrl, jemaat);
      console.log("Jemaat updated:", updateJemaatResponse.data);
    } catch (error) {
      console.error("Error updating jemaat:", error);
    }
  };

  return (
    <div>
      <h1>Edit Jemaat</h1>
      {jemaat ? (
        <EditJemaatForm
          jemaat={jemaat}
          ayah={ayah}
          ibu={ibu}
          onSubmit={handleSubmit}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditJemaatPage;
