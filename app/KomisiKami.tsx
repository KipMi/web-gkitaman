import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type KomisiKamiType = {
  children: React.ReactNode;
  title: string;
  imgSrc: string | StaticImport;
};

const KomisiKami: React.FC<KomisiKamiType> = ({ children, title, imgSrc }) => {
  return (
    <div className="card card-side w-full h-60 bg-base-100 shadow-xl my-3">
      <figure className="w-3/4">
        <Image src={imgSrc} alt="no img" />
      </figure>
      <div className="card-body overflow-auto">
        <h1 className="card-title">{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default KomisiKami;
