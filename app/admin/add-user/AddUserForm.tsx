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
  id: string;
};

const AddUserForm = ({
  updateAllUser,
}: {
  updateAllUser: (newUser: FormData) => void;
}) => {
  const { isLoggedIn, role, username } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const checkRole = () => {
      if (role != "ADMIN") {
        router.push("/");
      }

      checkRole();
    };
  }, [role, router]);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { username, password, role } = data;

    const user = {
      username,
      password,
      role,
    };

    try {
      const response = await axios.post(url, user);
      const newUser: FormData = response.data;
      console.log("New user created", response.data);
      reset();
      setSubmissionMessage("Data has been submitted successfully");
      setTimeout(() => {
        setSubmissionMessage(null);
      }, 5000);

      updateAllUser(newUser);
    } catch (error) {
      console.log(error);
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
          type="password"
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
          value="Create User"
          className="btn btn-success mt-3"
        />
      </form>
    </div>
  );
};

export default AddUserForm;
