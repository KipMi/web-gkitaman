"use client";

import useAuth from "@/app/hooks/useAuth";
import usePersekutuanDoaStore from "@/app/store/usePersekutuanDoaStore";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/doa`;

type FormData = {
  category: string;
  tema: string;
  pemimpin: string;
  waktuMulai: Date;
  waktuSelesai: Date;
};

const FormPersekutuanDoa = () => {
  const { isLoggedIn, role, username } = useAuth();

  const { updateCard } = usePersekutuanDoaStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { category, tema, pemimpin, waktuMulai, waktuSelesai } = data;

    const mulaiDate = `1970-01-01 ${waktuMulai}`;
    const selesaiDate = `1970-01-01 ${waktuSelesai}`;

    // updateCard(category, {
    //   tema,
    //   pemimpin,
    //   waktuMulai,
    //   waktuSelesai,
    // });

    const doa = {
      tema,
      pemimpin,
      waktuMulai: new Date(mulaiDate),
      waktuSelesai: new Date(selesaiDate),
    };

    const checkDoa = await axios.get(url);
    const doaData = checkDoa.data;

    if (doaData && Array.isArray(data) && data.length > 0) {
      const doa = {
        tema,
        pemimpin,
        waktuMulai: new Date(mulaiDate),
        waktuSelesai: new Date(selesaiDate),
      };

      const response = await axios.patch(url + `/${category}`, doa);
      console.log("Form submitted", response.data);

      reset();
    } else {
      const doa = {
        category,
        tema,
        pemimpin,
        waktuMulai: new Date(mulaiDate),
        waktuSelesai: new Date(selesaiDate),
      };

      const response = await axios.post(url);
      console.log("Form submitted", response.data, doa);

      reset();
    }

    setSubmissionMessage("Data has been submitted successfully");

    setTimeout(() => {
      setSubmissionMessage(null);
    }, 5000);
  };

  return (
    <form
      action=""
      className="w-full flex justify-around flex-wrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <select
          {...register("category", { required: "Category is required" })}
          id="category"
          className="input input-bordered w-full"
        >
          <option value="pagi">Doa Pagi</option>
          <option value="malam">Doa Malam</option>
        </select>
      </div>
      <div className="w-1/2">
        <label htmlFor="tema" className="label">
          <span className="label-text">Tema Doa</span>
        </label>
        <input
          {...register("tema", { required: "Tema is required" })}
          type="text"
          id="tema"
          className="input input-bordered w-full"
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="pemimpin" className="label">
          <span className="label-text">Dipimpin Oleh</span>
        </label>
        <input
          {...register("pemimpin", { required: "Dipimpin is required" })}
          type="text"
          id="pemimpin"
          className="input input-bordered w-full"
        />
      </div>
      <div className="w-full">
        <div>
          <label htmlFor="waktuMulai" className="label">
            <span className="label-text">Waktu Pelaksanaan</span>
          </label>
          <input
            {...register("waktuMulai", { required: "Waktu mulai is required" })}
            type="time"
            id="waktuMulai"
            className="input input-bordered w-1/2"
          />
          <input
            {...register("waktuSelesai", {
              required: "Waktu selesai is required",
            })}
            type="time"
            id="waktuSelesai"
            className="input input-bordered w-1/2"
          />
        </div>
      </div>

      <input type="submit" value="Submit" className="mt-3 btn btn-success" />
    </form>
  );
};

export default FormPersekutuanDoa;
