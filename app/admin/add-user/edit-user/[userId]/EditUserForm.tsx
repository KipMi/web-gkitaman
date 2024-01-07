"use client";

import useAuth from "@/app/hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

type FormData = {
  username: string;
  password: string;
  role: string;
};

const EditUserForm = ({ user, id }: { user: FormData; id: string }) => {
  const { isLoggedIn, role, username } = useAuth();

  const router = useRouter();

  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  useEffect(() => {
    const setUserValue = () => {
      if (user) {
        setValue("username", user.username);
        setValue("role", user.role);
      }
    };

    setUserValue();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.patch(`${url}/${id}`, data);
      console.log("New user created", response.data);
      reset();
      setSubmissionMessage("Data has been submitted successfully");

      router.back();

      setTimeout(() => {
        setSubmissionMessage(null);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center p-5">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col border-2 rounded-md p-5"
      >
        <label htmlFor="username" className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          {...register("username")}
          type="text"
          id="username"
          className="input input-bordered"
        />
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          {...register("password")}
          type="text"
          id="password"
          className="input input-bordered"
        />
        <label htmlFor="role" className="label">
          <span className="label-text">Role</span>
        </label>
        <select
          {...register("role")}
          id="role"
          className="select select-bordered"
        >
          <option value="ADMIN">Admin</option>
          <option value="KOMISIANAK">Komisi Anak</option>
          <option value="KOMISIREMAJA">Komisi Anak</option>
          <option value="KOMISIPEMUDA">Komisi Pemuda</option>
          <option value="KOMISIDEWASA">Komisi Dewasa</option>
          <option value="KOMISILANSIA">Komisi Lansia</option>
          <option value="KOMISIKESENIAN">Komisi Kesenian</option>
          <option value="KOMISIMULTIMEDIA">Komisi Multimedia</option>
        </select>
        {submissionMessage ? (
          <div>
            <h1 className=" text-green-400">{submissionMessage}</h1>
          </div>
        ) : (
          ""
        )}
        <input
          type="submit"
          value="Update User"
          className="btn btn-success mt-3"
        />
      </form>
    </div>
  );
};

export default EditUserForm;
