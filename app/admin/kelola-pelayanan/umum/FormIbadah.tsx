'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/ibadah`;

type FormData = {
  temaIbadah: string;
  pemimpin: string;
  category: string;
  infoTambahan: string;
  waktuMulai: Date;
  waktuSelesai: Date;
  linkVideo: string;
};

const FormIbadah = () => {
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
    const {
      temaIbadah,
      pemimpin,
      category,
      infoTambahan,
      waktuMulai,
      waktuSelesai,
      linkVideo,
    } = data;

    const mulaiDate = `1970-01-01 ${waktuMulai}`;
    const selesaiDate = `1970-01-01 ${waktuSelesai}`;

    const ibadah = {
      temaIbadah,
      pemimpin,
      infoTambahan,
      waktuMulai: new Date(mulaiDate),
      waktuSelesai: new Date(selesaiDate),
      linkVideo,
    };

    console.log(ibadah);

    const response = await axios.put(url + `/${data.category}`, ibadah);
    console.log('Form Submitted', response.data);

    reset();

    setSubmissionMessage('Data has been submitted successfully');

    setTimeout(() => {
      setSubmissionMessage(null);
    }, 5000);
  };
  return (
    <div>
      <form
        action=""
        className="w-full flex justify-around flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-1/2">
          <label htmlFor="temaIbadah" className="label">
            <span className="label-text">Tema Ibadah</span>
          </label>
          <input
            {...register('temaIbadah')}
            type="text"
            id="temaIbadah"
            className="input input-bordered w-full"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="pemimpin" className="label">
            <span className="label-text">Dipimpin Oleh</span>
          </label>
          <input
            {...register('pemimpin')}
            type="text"
            id="pemimpin"
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full">
          <label htmlFor="category" className="label">
            <span className="label-text">Kategori</span>
          </label>
          <select
            id="category"
            className="input input-bordered w-full"
            {...register('category')}
          >
            <option value="umum">Ibadah Umum</option>
            <option value="remaja">Ibadah Remaja</option>
            <option value="pemuda">Ibadah Pemuda</option>
            <option value="sekolahMinggu">Sekolah Minggu</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="infoTambahan" className="label">
            <span className="label-text">Info Tambahan</span>
          </label>
          <textarea
            {...register('infoTambahan')}
            id="infoTambahan"
            className="textarea textarea-bordered block w-full"
          ></textarea>
        </div>
        <div className="w-full">
          <label htmlFor="waktuMulai" className="label">
            <span className="label-text">Waktu Pelaksanaan</span>
          </label>
          <div className="flex justify-around">
            <input
              {...register('waktuMulai', {
                required: 'Field must not be empty',
              })}
              type="time"
              id="waktuMulai"
              className="input input-bordered w-full"
            />

            <input
              {...register('waktuSelesai', {
                required: 'Field must not be empty',
              })}
              type="time"
              id="waktuSelesai"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="linkIbadah" className="label">
            <span className="label-text">Link Video Ibadah</span>
          </label>
          <input
            {...register('linkVideo')}
            type="text"
            id="linkIbadah"
            className="input input-bordered w-full"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-success mt-5" />
      </form>

      {submissionMessage && (
        <div className="text-success mt-3">{submissionMessage}</div>
      )}
    </div>
  );
};

export default FormIbadah;
