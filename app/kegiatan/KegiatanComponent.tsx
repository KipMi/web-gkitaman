import React from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type KegiatanData = {
  id: number;
  judulKegiatan: string;
  imageURL: string;
  deskripsiKegiatan?: string;
};

type KegiatanProps = {
  data: KegiatanData[];
};

const KegiatanComponent: React.FC<KegiatanProps> = ({ data }) => {
  console.log(data[1]);
  return (
    <div className="flex flex-wrap justify-around">
      {data.map((item) => (
        <div
          className="card w-96 h-96 bg-base-100 shadow-xl mt-5"
          key={item.id}
        >
          <figure>
            <img
              src={`${apiURL}/uploads/images/${item.imageURL}`}
              alt={item.judulKegiatan}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.judulKegiatan}</h2>
            <p>{item.deskripsiKegiatan}</p>
            {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KegiatanComponent;
