import React from "react";
import Link from "next/link";

const Tabs = () => {
  return (
    <div className="tabs flex justify-center">
      <Link
        className="tab tab-bordered hover:tab-active"
        href="/pelayanan/umum"
      >
        Pelayanan Ibadah
      </Link>
      <Link
        className="tab tab-bordered hover:tab-active"
        href={"/pelayanan/persekutuan-doa"}
      >
        Persekutuan Doa
      </Link>
      <Link
        className="tab tab-bordered hover:tab-active"
        href="/pelayanan/pemahaman-alkitab"
      >
        Pemahaman Alkitab
      </Link>
      <Link
        className="tab tab-bordered hover:tab-active"
        href="/pelayanan/baptis"
      >
        Layanan Baptis
      </Link>
      <Link
        className="tab tab-bordered hover:tab-active"
        href="/pelayanan/pernikahan"
      >
        Layanan Pernikahan
      </Link>
    </div>
  );
};

export default Tabs;
