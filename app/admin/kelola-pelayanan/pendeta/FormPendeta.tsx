"use client";

import useAuth from "@/app/hooks/useAuth";
import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/pendeta`;

type FormData = {
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  imageURL: string;
  status: string;
};

const FormPendeta = () => {
  const { isLoggedIn, role, username } = useAuth();

  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { namaDepan, namaKeluarga, namaTengah, imageURL, status } = data;
    console.log(data);
    try {
      //   const pendeta = {
      //     namaDepan,
      //     namaTengah,
      //     namaKeluarga,
      //     imageURL: imageURL[0],
      //     status: JSON.parse(status.toLowerCase()),
      //   };

      const formData = new FormData();

      formData.append("namaDepan", data.namaDepan);
      formData.append("namaTengah", data.namaTengah);
      formData.append("namaKeluarga", data.namaKeluarga);
      formData.append("status", data.status);

      // console.log(JSON.parse(data.status.toLowerCase()));

      const file = data.imageURL[0];
      console.log(file);
      formData.append("imageURL", file);

      const response = await axios.post(url, formData);
      console.log("Form submitted", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        encType="multipart/form-data"
        noValidate
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="namaDepan" className="label">
          <span className="label-text">Nama Depan</span>
        </label>
        <input
          {...register("namaDepan", { required: "Nama Depan is required" })}
          type="text"
          id="namaDepan"
          className="input input-bordered w-full"
        />
        <label htmlFor="namaTengah" className="label">
          <span className="label-text">Nama Tengah</span>{" "}
        </label>
        <input
          {...register("namaTengah")}
          type="text"
          id="namaTengah"
          className="input input-bordered w-full"
        />
        <label htmlFor="namaKeluarga" className="label">
          <span className="label-text">Nama Keluarga</span>
        </label>
        <input
          {...register("namaKeluarga", {
            required: "Nama Keluarga is required",
          })}
          type="text"
          id="namaKeluarga"
          className="input input-bordered w-full"
        />
        <label htmlFor="imageURL" className="label">
          <span className="label-text">Gambar</span>
        </label>
        <input
          {...register("imageURL", { required: "Image is required" })}
          type="file"
          id="imageURL"
          className="file-input file-input-bordered w-full"
        />
        <label htmlFor="status" className="label">
          <span className="label-text">Status</span>
        </label>
        <select
          {...register("status", { required: "Status  is required" })}
          name=""
          id="status"
          className="select select-bordered w-full"
        >
          <option value="AKTIF">Aktif</option>
          <option value="TIDAKAKTIF">Tidak Aktif</option>
        </select>
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
};

export default FormPendeta;
