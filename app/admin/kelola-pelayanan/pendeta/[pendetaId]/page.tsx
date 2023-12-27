"use client";

import React, { useEffect, useState } from "react";
import FormEditPendeta from "./FormEditPendeta";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type FormValues = {
  namaDepan: string;
  namaTengah: string;
  namaKeluarga: string;
  status: string;
  imageURL: string;
};

const EditPendetaPage = ({ params }: { params: { pendetaId: number } }) => {
  const id = params.pendetaId;
  const [pendeta, setPendeta] = useState<FormValues>();
  const pendetaURL = `${apiURL}/pendeta/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pendetaURL);
        const pendetaData: FormValues = response.data;

        setPendeta(pendetaData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pendetaURL]);
  return (
    <div>
      {pendeta ? (
        <FormEditPendeta pendeta={pendeta} id={id} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPendetaPage;
