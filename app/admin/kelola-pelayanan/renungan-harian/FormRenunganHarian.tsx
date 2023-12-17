'use client';

import axios from 'axios';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/renungan`;

type FormData = {
  title: string;
  kitab: string;
  ayat: string;
  content: string;
};

const FormRenunganHarian = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { title, kitab, ayat, content } = data;

    const renungan = {
      title,
      kitab,
      ayat,
      content,
    };

    const checkRenungan = await axios.get(url);

    if (checkRenungan.data.length) {
      const response = await axios.patch(url + '/1', renungan);

      console.log('Form submitted', response.data);
    } else {
      const response = await axios.post(url, renungan);

      console.log('Form submitted new data created', response.data);
    }

    // if (checkRenungan) {
    //     const response = await axios.patch
    // }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="label">
          <span>Judul Renungan</span>
        </label>
        <input
          {...register('title')}
          type="text"
          id="title"
          className="input input-bordered w-full"
        />
        <label htmlFor="kitab" className="label">
          <span className="label-text">Kitab</span>
        </label>
        <input
          {...register('kitab')}
          type="text"
          id="kitab"
          className="input input-bordered w-full"
        />
        <label htmlFor="ayat" className="label">
          <span className="label-text">Ayat</span>
        </label>
        <textarea
          {...register('ayat')}
          id="ayat"
          className="textarea textarea-bordered block w-full"
        />
        <label htmlFor="content" className="label">
          <span className="label-text">Isi Renungan</span>
        </label>
        <textarea
          {...register('content')}
          id="content"
          className="textarea textarea-bordered block w-full"
        />
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
};

export default FormRenunganHarian;
