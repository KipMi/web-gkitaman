import React from "react";
import Image from "next/image";
import pbg from "../assets/img/pf.jpg";

type KaryawanCardProps = {
  name: string;
  imgUrl: string;
};

const KaryawanCard = (props: KaryawanCardProps) => {
  return (
    <div className="card w-64 h-80 bg-base-100 shadow-xl m-5">
      <figure>
        <img src={props.imgUrl} alt="no data" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default KaryawanCard;
