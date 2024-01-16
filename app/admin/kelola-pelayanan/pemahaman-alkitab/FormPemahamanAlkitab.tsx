"use client";

import useAuth from "@/app/hooks/useAuth";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/pemahaman/1`;

type FormData = {
  tema: string;
  pendeta: string;
};

const FormPemahamanAlkitab = () => {
  const { isLoggedIn, role, username } = useAuth();
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { tema, pendeta } = data;

    const pmh = {
      tema,
      pendeta,
    };
    console.log(data);
    try {
      //   const pendeta = {
      //     namaDepan,
      //     namaTengah,
      //     namaKeluarga,
      //     imageURL: imageURL[0],
      //     status: JSON.parse(status.toLowerCase()),
      //   };

      // console.log(JSON.parse(data.status.toLowerCase()));

      const response = await axios.patch(url, pmh);
      console.log(pmh);
      console.log("Form submitted", response.data);
      reset();
      setSubmissionMessage("Data has been submitted successfully");
      setTimeout(() => {
        setSubmissionMessage(null);
      }, 5000);
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
        <label htmlFor="tema" className="label">
          <span className="label-text">Tema</span>
        </label>
        <input
          {...register("tema", { required: "Nama Depan is required" })}
          type="text"
          id="tema"
          className="textarea textarea-bordered w-full"
        />
        <label htmlFor="pendeta" className="label">
          <span className="label-text">Pendeta</span>
        </label>
        <input
          {...register("pendeta", { required: "Nama Depan is required" })}
          type="text"
          id="pendeta"
          className="textarea textarea-bordered w-full"
        />
        {submissionMessage ? (
          <h1 className="text-green-400">{submissionMessage}</h1>
        ) : (
          ""
        )}
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
};

export default FormPemahamanAlkitab;
