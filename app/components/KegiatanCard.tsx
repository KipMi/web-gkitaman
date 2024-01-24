import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type kegiatanProps = {
  judulKegiatan: string;
  imageURL: string;
  children?: React.ReactNode;
};

const KegiatanCard = (props: kegiatanProps) => {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl mt-5">
      <figure>
        <img src={props.imageURL} alt={props.judulKegiatan} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.judulKegiatan}</h2>
        <p className="text-justify">{props.children}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div> */}
      </div>
    </div>
  );
};

export default KegiatanCard;
