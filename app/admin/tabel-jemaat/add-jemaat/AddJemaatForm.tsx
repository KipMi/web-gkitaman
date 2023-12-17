'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/jemaats`;

const AddJemaatForm = () => {
  const router = useRouter();

  const [noAnggota, setNoAnggota] = useState('');
  const [namaDepan, setNamaDepan] = useState('');
  const [namaTengah, setNamaTengah] = useState('');
  const [namaKeluarga, setNamaKeluarga] = useState('');
  const [noWA, setNoWA] = useState('');
  const [noTelpRumah, setNoTelpRumah] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [golonganDarah, setGolonganDarah] = useState('A');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [alamatRumah, setAlamatRumah] = useState('');
  const [wilayah, setWilayah] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const jemaat = {
      noAnggota: parseInt(noAnggota),
      namaDepan,
      namaTengah,
      namaKeluarga,
      noWA: parseInt(noWA),
      noTelpRumah: parseInt(noTelpRumah),
      tempatLahir,
      golonganDarah,
      tanggalLahir: new Date(tanggalLahir),
      alamatRumah,
      wilayah,
    };

    console.log(jemaat);

    const res = await axios
      .post(url, jemaat)
      .then((res) => {
        console.log(res.status);
        router.push('/tabel-jemaat');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-xl">Add Jemaat</h1>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-wrap w-3/4 h-full justify-between border-4 rounded-lg p-5"
      >
        <div className="w-full my-3">
          <label htmlFor="noAnggota" className="label">
            <span className="label-text">No. Anggota</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="No. Anggota"
            type="number"
            value={noAnggota}
            onChange={(e) => setNoAnggota(e.target.value)}
            required
            id="noAnggota"
          />
        </div>
        <div className="w-1/3 my-3">
          <label htmlFor="namaDepan" className="label">
            <span className="label-text">Nama Depan</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Nama Depan"
            type="text"
            value={namaDepan}
            onChange={(e) => setNamaDepan(e.target.value)}
            id="namaDepan"
          />
        </div>
        <div className="w-1/3 my-3">
          <label htmlFor="namaTengah" className="label">
            <span className="label-text">Nama Tengah</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Nama Tengah"
            type="text"
            value={namaTengah}
            onChange={(e) => setNamaTengah(e.target.value)}
            id="namaTengah"
          />
        </div>
        <div className="w-1/3 my-3">
          <label htmlFor="namaKeluarga" className="label">
            <span className="label-text">Nama Keluarga</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Nama Keluarga"
            type="text"
            value={namaKeluarga}
            onChange={(e) => setNamaKeluarga(e.target.value)}
            id="namaKeluarga"
          />
        </div>
        <div className="w-2/5 my-3">
          <label htmlFor="noWA" className="label">
            <span className="label-text">Nomor HP/WA</span>
          </label>
          <input
            type="number"
            name=""
            id="noWA"
            value={noWA}
            onChange={(e) => setNoWA(e.target.value)}
            className="input input-bordered w-full"
            placeholder="No. HP / WA"
          />
        </div>
        <div className="w-2/5 my-3">
          <label htmlFor="noTelpRumah" className="label">
            <span className="label-text">Nomor Telepon Rumah</span>
          </label>
          <input
            type="number"
            name=""
            id="noTelpRumah"
            value={noTelpRumah}
            onChange={(e) => setNoTelpRumah(e.target.value)}
            className="input input-bordered w-full"
            placeholder="No. Telepon Rumah"
          />
        </div>
        <div className="w-full border-2 rounded-md p-5 my-5">
          <h1>Data Ayah</h1>
          <div className="w-full my-3">
            <label htmlFor="namaDepanAyah" className="label">
              <span className="label-text">Nama Depan</span>
            </label>
            <input
              type="text"
              id="namaDepanAyah"
              value={''}
              onChange={() => {}}
              className="input input-bordered w-full"
              placeholder="Nama Depan"
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="namaTengahAyah" className="label">
              <span className="label-text">Nama Tengah</span>
            </label>
            <input
              type="text"
              id="namaTengahAyah"
              value={''}
              onChange={() => {}}
              className="input input-bordered w-full"
              placeholder="Nama Tengah"
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="namaKeluargaAyah" className="label">
              <span className="label-text">Nama Keluarga</span>
            </label>
            <input
              type="text"
              id="namaKeluargaAyah"
              value={''}
              onChange={() => {}}
              className="input input-bordered w-full"
              placeholder="Nama Keluarga"
            />
          </div>
        </div>
        <div className="w-full p-5 border-2 rounded-md my-5">
          <h1>Data Ibu</h1>
          <div className="w-full my-3">
            <label htmlFor="namaDepanIbu" className="label">
              <span className="label-text">Nama Depan</span>
            </label>
            <input
              type="text"
              id="namaDepanIbu"
              value={''}
              onChange={() => {}}
              className="input input-bordered w-full"
              placeholder="Nama Depan"
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="namaTengahIbu" className="label">
              <span className="label-text">Nama Tengah</span>
            </label>
            <input
              type="text"
              id="namaTengahIbu"
              value={''}
              onChange={() => {}}
              className="input input-bordered w-full"
              placeholder="Nama Tengah"
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="namaKeluargaIbu" className="label">
              <span className="label-text">Nama Keluarga</span>
            </label>
            <input
              type="text"
              id="namaKeluargaIbu"
              value={''}
              onChange={() => {}}
              className="input input-bordered w-full"
              placeholder="Nama Keluarga"
            />
          </div>
        </div>
        <div className="w-full my-3">
          <label htmlFor="tempatLahir" className="label">
            <span className="label-text">Tempat Lahir</span>
          </label>
          <input
            type="text"
            name=""
            id="tempatLahir"
            value={tempatLahir}
            onChange={(e) => setTempatLahir(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Tempat Lahir"
          />
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="golonganDarah" className="label">
            <span className="label-text">Golongan Darah</span>
          </label>
          <select
            name=""
            id="golonganDarah"
            value={golonganDarah}
            onChange={(e) => setGolonganDarah(e.target.value)}
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
            <span className="label-text">Tanggal Lahir</span>
          </label>
          <input
            type="date"
            name=""
            id="tanggalLahir"
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Tempat Lahir"
          />
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="alamatRumah" className="label">
            <span className="label-text">Alamat Rumah</span>
          </label>
          <input
            type="text"
            name=""
            id="alamatRumah"
            value={alamatRumah}
            onChange={(e) => setAlamatRumah(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Alamat Rumah"
          />
        </div>
        <div className="w-1/2 my-3">
          <label htmlFor="wilayah" className="label">
            <span className="label-text">Wilayah</span>
          </label>
          <input
            type="text"
            name=""
            id="wilayah"
            value={wilayah}
            onChange={(e) => setWilayah(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Wilayah"
          />
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
