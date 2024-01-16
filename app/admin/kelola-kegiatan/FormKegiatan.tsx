"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/kegiatans`;
const urlUser = `${apiURL}/auth`;

type FormValues = {
  judulKegiatan: string;
  komisi: string;
  deskripsiKegiatan: string;
  imageURL: string;
};

const FormKegiatan = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [role, setRole] = useState();
  const [hasFetchData, setHasFetchData] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(urlUser + "/get/user");
        const userData = response.data;

        console.log("User is logged in", userData);
        setRole(userData.role);
        console.log(role);
        setIsLoggedIn(true);
        setHasFetchData(true);
      } catch (error) {
        setIsLoggedIn(false);
        console.log("User is not logged in");
        router.push("/");
      }

      console.log(isLoggedIn);
    };

    if (!hasFetchData) {
      checkLoggedIn();
    }
  }, [hasFetchData, isLoggedIn, role, router]);

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted", data);
    console.log(data.imageURL[0]);
    try {
      const formData = new FormData();
      formData.append("judulKegiatan", data.judulKegiatan);
      formData.append("imageURL", data.imageURL[0]);
      formData.append("komisi", data.komisi);
      formData.append("deskripsiKegiatan", data.deskripsiKegiatan);

      const response = await axios.post(url, formData);
      reset();
      setMessage("Data submitted successfully!");
      setTimeout(() => {
        setMessage(null);
      }, 3000);

      console.log("Form submitted", response.data);
      router.refresh();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form
      action=""
      className={"m-5 p-5 border rounded-lg flex flex-wrap justify-between"}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      encType="multipart/form-data"
    >
      <div className="w-1/3">
        <label htmlFor="judulKegiatan" className="label">
          <span className="label-text">Judul Kegiatan</span>
        </label>
        <input
          {...register("judulKegiatan", {
            required: "Judul kegiatan is required",
          })}
          type="text"
          id="judulKegiatan"
          className="input input-bordered w-full"
        />
      </div>
      <div className="w-1/3">
        <label htmlFor="imageURL" className="label">
          <span className="label-text">Gambar</span>
        </label>
        <input
          {...register("imageURL")}
          type="file"
          id="imageURL"
          className="file-input file-input-bordered w-full"
        />
      </div>
      <div className="w-1/3">
        <label htmlFor="komisi" className="label">
          <span className="label-text">Komisi</span>
        </label>
        <select
          {...register("komisi")}
          id="komisi"
          className="select select-bordered w-full"
        >
          <option
            value="Komisi Anak"
            disabled={role !== "SUPERADMIN" && role !== "KOMISIANAK"}
          >
            Komisi Anak
          </option>
          <option
            value="Komisi Remaja"
            disabled={role !== "SUPERADMIN" && role !== "KOMISIREMAJA"}
          >
            Komisi Remaja
          </option>
          <option
            value="Komisi Pemuda"
            disabled={role !== "SUPERADMIN" && role !== "KOMISIPEMUDA"}
          >
            Komisi Pemuda
          </option>
          <option
            value="Komisi Dewasa"
            disabled={role !== "SUPERADMIN" && role !== "KOMISIDEWASA"}
          >
            Komisi Dewasa
          </option>
          <option
            value="Komisi Lansia"
            disabled={role !== "SUPERADMIN" && role !== "KOMISILANSIA"}
          >
            Komisi Lansia
          </option>
          <option
            value="Komisi Kesenian"
            disabled={role !== "SUPERADMIN" && role !== "KOMISIKESENIAN"}
          >
            Komisi Kesenian
          </option>
          <option
            value="Komisi Multimedia"
            disabled={role != "KOMISIMULTIMEDIA"}
          >
            Komisi Multimedia
          </option>
        </select>
      </div>
      <div className="w-full">
        <label htmlFor="deskripsi" className="label">
          <span className="label-text">Deskripsi Kegiatan</span>
        </label>
        <textarea
          {...register("deskripsiKegiatan")}
          id="deskripsi"
          rows={5}
          className="textarea textarea-bordered block w-full"
        ></textarea>
      </div>

      {message ? <h1 className="text-green-400">{message}</h1> : ""}
      <input type="submit" value="Submit" className="btn btn-success my-5" />
    </form>
  );
};

export default FormKegiatan;
