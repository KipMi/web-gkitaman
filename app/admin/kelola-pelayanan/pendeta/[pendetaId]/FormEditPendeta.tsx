import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/pendeta`;
const urlUser = `${apiURL}/auth`;

type FormValues = {
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  status: string;
  imageURL: string;
};

const FormEditPendeta = ({
  pendeta,
  id,
}: {
  pendeta: FormValues;
  id: number;
}) => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [hasFetchData, setHasFetchData] = useState(false);
  const [role, setRole] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const setKegiatanValues = () => {
      if (pendeta) {
        setValue("namaDepan", pendeta.namaDepan);
        setValue("namaTengah", pendeta.namaTengah);
        setValue("namaKeluarga", pendeta.namaKeluarga);
        setValue("status", pendeta.status);
        setValue("imageURL", pendeta.imageURL);
      }
    };

    if (!hasFetchData) {
      checkLoggedIn();
    }

    if (hasFetchData) {
      setKegiatanValues();
    }
  }, [hasFetchData, isLoggedIn, role, router]);

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted", data);
    console.log(data.imageURL[0]);
    try {
      const response = await axios.patch(`${url}/${id}`, data);

      console.log("Form submitted", response.data);
      router.refresh();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  return (
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
        {...register("namaDepan")}
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
        {...register("namaKeluarga")}
        type="text"
        id="namaKeluarga"
        className="input input-bordered w-full"
      />
      <label htmlFor="imageURL" className="label">
        <span className="label-text">Gambar</span>
      </label>
      <input
        {...register("imageURL")}
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
  );
};

export default FormEditPendeta;
