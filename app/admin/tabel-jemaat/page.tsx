import React from "react";
import Link from "next/link";
import TabelJemaat from "./TabelJemaat";

interface jemaatType {
  id: number;
  noAnggota: number;
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  noWA: number;
  noTelpRumah: number;
  tempatLahir: string;
  tanggalLahir: Date;
  golonganDarah: string;
  alamatRumah: string;
  wilayah: string;
}

const TabelJemaatPage = async () => {
  return (
    <div className="m-10 h-auto min-h-screen">
      <h1 className="text-2xl">Tabel Pendataan Jemaat</h1>
      <div className="overflow-x-auto m-10">
        <div className="w-full flex justify-end px-10 items-center">
          <div className="join m-5">
            <input
              type="text"
              className="input input-bordered input-sm join-item"
              placeholder="Search"
            />
            <button className="btn btn-sm join-item">Search</button>
          </div>
          <Link
            href={"./tabel-jemaat/add-jemaat"}
            className="btn btn-success btn-sm m-5"
          >
            Add Jemaat
          </Link>
        </div>
        <TabelJemaat />
      </div>
    </div>
  );

  // console.log(jemaatData);
};

export default TabelJemaatPage;
