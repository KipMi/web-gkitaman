"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

type FormValues = {
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
  isAyahJemaat: boolean;
  namaDepanIbu: string;
  namaTengahIbu: string;
  namaKeluargaIbu: string;
  noAnggotaIbu: string;
  isIbuJemaat: boolean;
  pekerjaan: string;
  jabatan: string;
  perusahaan: string;
};

const AddJemaatForm = () => {
  const router = useRouter();

  const { register, handleSubmit, watch, setValue } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const isAyahJemaat = watch("isAyahJemaat");
  const isIbuJemaat = watch("isIbuJemaat");

  const noAnggotaAyah = watch("noAnggotaAyah");
  const noAnggotaIbu = watch("noAnggotaIbu");

  // useEffect(() => {
  //   const updateAnggotaAyah
  // })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    const {
      noAnggota,
      namaDepan,
      namaTengah,
      namaKeluarga,
      noWA,
      noTelpRumah,
      tempatLahir,
      golonganDarah,
      tanggalLahir,
      alamatRumah,
      wilayah,
      noAnggotaAyah,
      namaDepanAyah,
      namaTengahAyah,
      namaKeluargaAyah,
      isAyahJemaat,
      noAnggotaIbu,
      namaDepanIbu,
      namaTengahIbu,
      namaKeluargaIbu,
      isIbuJemaat,
      pekerjaan,
      jabatan,
      perusahaan,
    } = data;

    // console.log(da);

    const jemaat = {
      noAnggota: parseInt(noAnggota),
      namaDepan,
      namaTengah,
      namaKeluarga,
      ayah: {
        noAnggota: isAyahJemaat ? parseInt(noAnggotaAyah) : undefined,
        namaDepan: namaDepanAyah,
        namaTengah: namaTengahAyah,
        namaKeluarga: namaKeluargaAyah,
      },
      ibu: {
        noAnggota: isIbuJemaat ? parseInt(noAnggotaIbu) : undefined,
        namaDepan: namaDepanIbu,
        namaTengah: namaTengahIbu,
        namaKeluarga: namaKeluargaIbu,
      },
      noWA: parseInt(noWA),
      noTelpRumah: parseInt(noTelpRumah),
      tempatLahir,
      golonganDarah,
      tanggalLahir: new Date(tanggalLahir),
      alamatRumah,
      wilayah,
      pekerjaan,
      jabatan,
      perusahaan,
    };

    console.log(jemaat);

    try {
      const response = await axios.post(`${apiURL}/jemaats`, jemaat);

      alert("Form submitted successfully");

      router.push("/admin/tabel-jemaat");
      console.log("Form submitted", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-xl">Add Jemaat</h1>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap w-3/4 h-full justify-between border-4 rounded-lg p-5"
      >
        <div className="w-full my-3">
          <label htmlFor="noAnggota" className="label">
            <span className="label-text">
              No. Anggota <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("noAnggota", {
              required: "No. Anggota is required",
            })}
            className="input input-bordered w-full"
            placeholder="No. Anggota"
            type="number"
            id="noAnggota"
          />
        </div>
        <div className="w-1/3 my-3">
          <label htmlFor="namaDepan" className="label">
            <span className="label-text">
              Nama Depan <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("namaDepan", { required: "Nama Depan is required" })}
            className="input input-bordered w-full"
            placeholder="Nama Depan"
            type="text"
            id="namaDepan"
          />
        </div>
        <div className="w-1/3 my-3">
          <label htmlFor="namaTengah" className="label">
            <span className="label-text">Nama Tengah</span>
          </label>
          <input
            {...register("namaTengah")}
            className="input input-bordered w-full"
            placeholder="Nama Tengah"
            type="text"
            id="namaTengah"
          />
        </div>
        <div className="w-1/3 my-3">
          <label htmlFor="namaKeluarga" className="label">
            <span className="label-text">
              Nama Keluarga <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("namaKeluarga", {
              required: "Nama Keluarga is required",
            })}
            className="input input-bordered w-full"
            placeholder="Nama Keluarga"
            type="text"
            id="namaKeluarga"
          />
        </div>
        <div className="w-2/5 my-3">
          <label htmlFor="noWA" className="label">
            <span className="label-text">
              Nomor HP/WA <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("noWA", { required: "Nomor WA is required" })}
            type="number"
            id="noWA"
            className="input input-bordered w-full"
            placeholder="No. HP / WA"
          />
        </div>
        <div className="w-2/5 my-3">
          <label htmlFor="noTelpRumah" className="label">
            <span className="label-text">
              Nomor Telepon Rumah <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("noTelpRumah", {
              required: "Nomor Telepon Rumah is required",
            })}
            type="number"
            id="noTelpRumah"
            className="input input-bordered w-full"
            placeholder="No. Telepon Rumah"
          />
        </div>
        <div className="w-full my-3">
          <label htmlFor="tempatLahir" className="label">
            <span className="label-text">
              Tempat Lahir <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("tempatLahir", {
              required: "Tempat Lahir is required",
            })}
            type="text"
            id="tempatLahir"
            className="input input-bordered w-full"
            placeholder="Tempat Lahir"
          />
        </div>
        <div className="border-2 rounded-md w-full p-5">
          <h1>Data Orang Tua</h1>
          <div className="w-full flex">
            <div className="w-1/3">
              <label htmlFor="namaDepanAyah" className="label">
                <span className="label-text">Nama Depan Ayah</span>
              </label>
              <input
                {...register("namaDepanAyah", { disabled: isAyahJemaat })}
                type="text"
                id="namaDepanAyah"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="namaTengahAyah" className="label">
                <span className="label-text">Nama Tengah Ayah</span>
              </label>
              <input
                {...register("namaTengahAyah", { disabled: isAyahJemaat })}
                type="text"
                id="namaTengahAyah"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="namaKeluargaAyah" className="label">
                <span className="label-text">Nama Keluarga Ayah</span>
              </label>
              <input
                {...register("namaKeluargaAyah", { disabled: isAyahJemaat })}
                type="text"
                id="namaKeluargaAyah"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-1/12">
            <label htmlFor="isAyahJemaat" className="label cursor-pointer">
              <span className="label-text">Jemaat</span>
              <input
                {...register("isAyahJemaat")}
                id="isAyahJemaat"
                type="checkbox"
                className="checkbox"
              />
            </label>
          </div>
          <label htmlFor="noAnggotaAyah" className="label">
            <span className="label-text">No. Anggota Ayah</span>
          </label>
          <input
            {...register("noAnggotaAyah", { disabled: !isAyahJemaat })}
            type="number"
            id="noAnggotaAyah"
            className="input input-bordered w-full"
          />
          <hr className="my-3" />
          <div className="w-full flex">
            <div className="w-1/3">
              <label htmlFor="namaDepanIbu" className="label">
                <span className="label-text">Nama Depan Ibu</span>
              </label>
              <input
                {...register("namaDepanIbu", { disabled: isIbuJemaat })}
                type="text"
                id="namaDepanIbu"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="namaTengahIbu" className="label">
                <span className="label-text">Nama Tengah Ibu</span>
              </label>
              <input
                {...register("namaTengahIbu", { disabled: isIbuJemaat })}
                type="text"
                id="namaTengahIbu"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="namaKeluargaIbu" className="label">
                <span className="label-text">Nama Keluarga Ibu</span>
              </label>
              <input
                {...register("namaKeluargaIbu", { disabled: isIbuJemaat })}
                type="text"
                id="namaKeluargaIbu"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-1/12">
            <label htmlFor="isIbuJemaat" className="label cursor-pointer">
              <span className="label-text">Jemaat</span>
              <input
                {...register("isIbuJemaat")}
                id="isIbuJemaat"
                type="checkbox"
                className="checkbox"
              />
            </label>
          </div>
          <label htmlFor="noAnggotaIbu" className="label">
            <span className="label-text">No. Anggota Ibu</span>
          </label>
          <input
            {...register("noAnggotaIbu", { disabled: !isIbuJemaat })}
            type="number"
            id="noAnggotaIbu"
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="golonganDarah" className="label">
            <span className="label-text">
              Golongan Darah <span className=" text-red-500">*</span>
            </span>
          </label>
          <select
            {...register("golonganDarah")}
            id="golonganDarah"
            className="input input-bordered w-full"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="tanggalLahir" className="label">
            <span className="label-text">
              Tanggal Lahir <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("tanggalLahir", {
              required: "Tanggal Lahir is required",
            })}
            type="date"
            id="tanggalLahir"
            className="input input-bordered w-full"
            placeholder="Tempat Lahir"
          />
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="alamatRumah" className="label">
            <span className="label-text">
              Alamat Rumah <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("alamatRumah", {
              required: "Alamat Rumah is required",
            })}
            type="text"
            id="alamatRumah"
            className="input input-bordered w-full"
            placeholder="Alamat Rumah"
          />
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="wilayah" className="label">
            <span className="label-text">
              Wilayah <span className=" text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("wilayah", { required: "Wilayah is required" })}
            type="text"
            id="wilayah"
            className="input input-bordered w-full"
            placeholder="Wilayah"
          />
        </div>
        <div className="border-2 rounded-md w-full p-5">
          <h1 className="font-bold">Data Pekerjaan</h1>
          <div className="w-full">
            <label htmlFor="pekerjaan" className="label">
              <span className="label-text">Pekerjaan</span>
            </label>
            <input
              {...register("pekerjaan")}
              type="text"
              id="pekerjaan"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="jabatan" className="label">
              <span className="label-text">Jabatan</span>
            </label>
            <input
              {...register("jabatan")}
              type="text"
              id="jabatan"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="perusahaan" className="label">
              <span className="label-text">Perusahaan</span>
            </label>
            <input
              {...register("perusahaan")}
              type="text"
              id="perusahaan"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button className="btn btn-success" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Jemaat</span>}
        </button>
      </form>
    </div>
  );
};

export default AddJemaatForm;
