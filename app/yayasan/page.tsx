import Image from "next/image";
import Link from "next/link";
import React from "react";
import hidupBaruimg from "../assets/img/1d.jpg";
import yahyaImg from "../assets/img/MG_3650-edit.jpg";
import danmulImg from "../assets/img/desk1.png";

const page = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl">Yayasan</h1>
      <div className="w-full min-h-screen flex items-center justify-around">
        <div className="card w-96 shadow-md">
          <figure>
            <Image src={danmulImg} alt="Hidup Baru" />
          </figure>
          <div className="card-body">
            <h1 className="text-2xl">
              <Link href={"https://www.danamuliabandung.or.id/view/home.php"}>
                Dana Mulia
              </Link>
            </h1>
          </div>
        </div>
        <div className="card w-96 shadow-md">
          <figure>
            <Image src={yahyaImg} alt="Hidup Baru" />
          </figure>
          <div className="card-body">
            <h1 className="text-2xl">
              <Link href={"https://sekolahyahya.sch.id/"}>SK Yahya</Link>
            </h1>
          </div>
        </div>
        <div className="card w-96 shadow-md">
          <figure>
            <Image src={hidupBaruimg} alt="Hidup Baru" />
          </figure>
          <div className="card-body">
            <h1 className="text-2xl">
              <Link
                href={
                  "https://sekolahhidupbaru.sch.id/sekolahhidupbaru/public/"
                }
              >
                Hidup Baru
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
