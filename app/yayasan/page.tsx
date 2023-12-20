import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl">Yayasan</h1>
      <div className="w-full min-h-screen flex items-center justify-around">
        <div className="card w-96 shadow-md">
          <div className="card-body">
            <h1 className="text-2xl">
              <Link href={""}>Dana Mulia</Link>
            </h1>
          </div>
        </div>
        <div className="card w-96 shadow-md">
          <div className="card-body">
            <h1 className="text-2xl">
              <Link href={""}>SK Yahya</Link>
            </h1>
          </div>
        </div>
        <div className="card w-96 shadow-md">
          <div className="card-body">
            <h1 className="text-2xl">
              <Link href={""}>Hidup Baru</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
